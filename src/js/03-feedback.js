import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

let formData = {};

const refs = {
  form: document.querySelector(".feedback-form"),
};

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onSubmit);

loadData();

function onFormInput() {
  saveData();
}

function onSubmit(e) {
  e.preventDefault();

  const {
    elements: {
      email,
      message,
    },
  } = e.target;

  if (email.value === "" || message.value === "") {
    alert("All field must be filled to proceed");
    return;
  }

  console.log(formData);
  formData = {};

  refs.form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function isFormFilled() {
  return Object.values(formData).every(val => val !== "");
}

function saveData() {
  try {
    // Save all data to the object
    [...refs.form.elements].forEach(el => {
      if (el.nodeName === "BUTTON") {
        return;
      }

      formData[el.name] = el.value;
    });

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  } catch (e) {
    console.log("Error!");
    console.log(e.name);
    console.log(e.message);
    console.log(e.description);
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
    console.log(e.description);
  }
}
