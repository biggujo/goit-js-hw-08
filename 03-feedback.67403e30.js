function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,r,i,f,a,l,u=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,u=t,f=e.apply(i,n)}function h(e){return u=e,a=setTimeout(j,t),c?y(e):f}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-u>=i}function j(){var e=g();if(T(e))return E(e);a=setTimeout(j,function(e){var n=t-(e-l);return s?m(n,i-(e-u)):n}(e))}function E(e){return a=void 0,v&&o?y(e):(o=r=void 0,f)}function O(){var e=g(),n=T(e);if(o=arguments,r=this,l=e,n){if(void 0===a)return h(l);if(s)return a=setTimeout(j,t),y(l)}return void 0===a&&(a=setTimeout(j,t)),f}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),u=0,o=l=r=a=void 0},O.flush=function(){return void 0===a?f:E(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};let y={};const h={form:document.querySelector(".feedback-form")};h.form.addEventListener("input",e(t)((function(){!function(){try{[...h.form.elements].forEach((e=>{"BUTTON"!==e.nodeName&&(y[e.name]=e.value)})),localStorage.setItem("feedback-form-state",JSON.stringify(y))}catch(e){console.log("Error!"),console.log(e.name),console.log(e.message),console.log(e.description)}}()}),500)),h.form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.target;if(""===t.value||""===n.value)return void alert("All field must be filled to proceed");console.log(y),y={},h.form.reset(),localStorage.removeItem("feedback-form-state")})),function(){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;y=e,[...h.form.elements].forEach((e=>{void 0!==y[e.name]&&(e.value=y[e.name])}))}catch(e){console.log("Error!"),console.log(e.name),console.log(e.message),console.log(e.description)}}();
//# sourceMappingURL=03-feedback.67403e30.js.map
