!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return u.default(e)||a.default(e)||l.default(e)||f.default()};var u=c(o("kMC0W")),a=c(o("7AJDX")),f=c(o("8CtQK")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s,d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",v=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,h=_||O||Function("return this")(),j=Object.prototype.toString,x=Math.max,M=Math.min,w=function(){return h.Date.now()};function S(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function m(e){return l=e,a=setTimeout(g,t),c?v(e):u}function y(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function g(){var e=w();if(y(e))return b(e);a=setTimeout(g,function(e){var r=t-(e-f);return s?M(r,i-(e-l)):r}(e))}function b(e){return a=void 0,d&&n?v(e):(n=o=void 0,u)}function _(){var e=w(),r=y(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return m(f);if(s)return a=setTimeout(g,t),v(f)}return void 0===a&&(a=setTimeout(g,t)),u}return t=N(t)||0,T(r)&&(c=!!r.leading,i=(s="maxWait"in r)?x(N(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),_.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},_.flush=function(){return void 0===a?u:b(w())},_}function T(t){var r=void 0===t?"undefined":e(d)(t);return!!t&&("object"==r||"function"==r)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(T(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=T(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=y.test(t);return n||g.test(t)?b(t.slice(2),n?2:8):m.test(t)?NaN:+t}s=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return T(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),S(e,t,{leading:n,maxWait:t,trailing:o})};var E="feedback-form-state",I={},P={form:document.querySelector(".feedback-form")};function k(){try{e(i)(P.form.elements).forEach((function(e){"BUTTON"!==e.nodeName&&(I[e.name]=e.value)})),localStorage.setItem(E,JSON.stringify(I))}catch(e){console.log("Error!"),console.log(e.name),console.log(e.message),console.log(e.description)}}P.form.addEventListener("input",e(s)((function(){k()}),500)),P.form.addEventListener("submit",(function(e){if(e.preventDefault(),k(),!function(){return Object.values(I).every((function(e){return""!==e}))}())return;console.log("The data has been send!"),console.table(I),I={},P.form.reset(),localStorage.removeItem(E)})),function(){try{var t=JSON.parse(localStorage.getItem(E));if(null===t)return;I=t,e(i)(P.form.elements).forEach((function(e){void 0!==I[e.name]&&(e.value=I[e.name])}))}catch(e){console.log("Error!"),console.log(e.name),console.log(e.message),console.log(e.description)}}()}();
//# sourceMappingURL=03-feedback.3b82c3f4.js.map