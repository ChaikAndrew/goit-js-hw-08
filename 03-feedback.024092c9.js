!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),s=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),d?b(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function j(){var e=p();if(w(e))return T(e);f=setTimeout(j,function(e){var n=t-(e-l);return m?v(n,a-(e-c)):n}(e))}function T(e){return f=void 0,s&&r?b(e):(r=o=void 0,u)}function O(){var e=p(),n=w(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(m)return f=setTimeout(j,t),b(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=h(t)||0,y(n)&&(d=!!n.leading,a=(m="maxWait"in n)?g(h(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},O.flush=function(){return void 0===f?u:T(p())},O}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var S={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")},w="feedback-form-state",j={};!function(){if(localStorage.getItem(w)){var e=localStorage.getItem(w);j=JSON.parse(e),console.log(e),S.form.email.value=j.email?j.email:"",S.form.message.value=j.message?j.message:""}}(),S.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.email.value,n=e.currentTarget.message.value;if(""===t||""===n)return void Swal.fire({text:"Ви маєте ввести дані в поля: Email та Message!",imageUrl:"https://raw.githubusercontent.com/ChaikAndrew/goit-js-hw-08/main/img/alert.png",imageWidth:430,imageHeight:200,backdrop:"rgba(0,0,0,.8)"});Swal.fire({text:"Вашe повідомлення успішно відправлено!",imageUrl:"https://iconarchive.com/download/i60615/double-j-design/origami-colored-pencil/blue-mail-send.ico",imageWidth:100,imageHeight:100,backdrop:"rgba(0,0,0,.8)"});JSON.parse(localStorage.getItem(w)),console.log(j),e.currentTarget.reset(),localStorage.removeItem(w),j={}})),S.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(j))}),200))}();
//# sourceMappingURL=03-feedback.024092c9.js.map
