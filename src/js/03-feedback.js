import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

let formData = {};

const refs = {
  form: document.querySelector(".feedback-form"),
}

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onSubmit);

loadData();

function onFormInput(e) {
  saveText(e.target);
  saveData();
}

function onSubmit(e) {
  e.preventDefault();
  refs.form.reset()
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function saveText(target) {
  formData[target.name] = target.value;
}

function saveData() {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  }
  catch (e) {
    console.log("Error!");
    console.log(e.name);
    console.log(e.message);
  }
}

function loadData() {
  try {
    const parseResult = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (parseResult === null) {
      return;
    }

    formData = parseResult;

    // Fill form elements with data
    [...refs.form.elements].forEach(el => {
      if (formData[el.name] === undefined) {
        return;
      }
      el.value = formData[el.name];
    });
  }
  catch (e) {
    console.log("Error!");
    console.log(e.name);
    console.log(e.message);
  }
}