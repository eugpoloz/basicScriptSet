var basicScriptSet=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertAfter=void 0;var o,r=n(8),i=(o=r)&&o.__esModule?o:{default:o};t.insertAfter=i.default},function(e,t,n){var o=n(2).Symbol;e.exports=o},function(e,t,n){var o=n(16),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.profiles,n=void 0===t?[]:t,r=e.message,i=void 0===r?"Редактирование данного профиля для вас запрещено!":r;if(0<n.length&&"object"===("undefined"==typeof profile?"undefined":o(profile))){profile.style.display="none";var u=new Set(n);u.has(UserID)&&(profile.innerHTML='<p style="margin: 1em 0; line-height: 2; text-align: center;">'+i+"</p>"),profile.style.display=""}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.addCtrlClicks=function(){function e(e){var t=e.target,n=e.ctrlKey,o=e.metaKey,r=e.altKey;if(t instanceof HTMLElement){var i=t.parentNode;if(i instanceof HTMLElement){var u=i.id,a=u.substr(7);n||o||r?"image"===a?bbcode("[img]","[/img]"):"link"===a?bbcode('[url=""]',"[/url]"):bbcode("["+a+"]","[/"+a+"]"):FORUM.get("editor."+a+".onclick()")}}}if("object"===o(FORUM.editor)){var t=document.querySelectorAll("#button-link, #button-hide, #button-image, #button-spoiler, #button-video");t&&t.forEach(function(t){var n=t.querySelector("img");n&&(n.removeAttribute("onclick"),n.addEventListener("click",e))})}},t.originalUploadedFirst=function(){if("object"===o(FORUM.editor)){var e=document.getElementById("image-insert-format");if(e)return e.innerHTML='<strong>Вставить как:</strong>\n    <br><br>\n    <select id="selected-insert-format">\n      <option value="viewer">Превью</option>\n      <option value="source" selected>Оригинал</option>\n    </select>'}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("object"===o(FORUM.editor)){var e=document.querySelector("#main-reply"),t=document.querySelector('input[name="submit"]'),n=document.querySelector('input[name="preview"]');e instanceof HTMLTextAreaElement&&e.addEventListener("keydown",function(n){var o=n.keyCode,r=n.ctrlKey,i=n.metaKey;13===o&&(r||i)&&(t&&t.click(),e.value="")}),n?(0,r.insertAfter)('input[name="preview"]','<div id="fastsubmit">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>'):(0,r.insertAfter)('input[name="submit"]','<div id="fastsubmit">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>')}};var r=n(0)},function(e,t,n){"use strict";function o(e,t){e&&(e.innerHTML=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(e){e.preventDefault();var t=e.target;if(t instanceof HTMLElement&&("PRE"===t.tagName||"A"===t.tagName)){var n=t.closest(".code-box"),u="PRE"===t.tagName?t:n&&n.querySelector("pre"),a=n&&n.querySelector(".legend");if(u instanceof HTMLPreElement){!function(e){var t=document.createRange();t.selectNodeContents(e);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}(u);var c=function(){var e;try{e=document.execCommand("copy")}catch(t){e=!1}return e}();if(!0===c&&a){var l;o(a,i),window.clearTimeout(l),l=window.setTimeout(function(){return o(a,r)},3e3)}}}}function n(){var e=document.querySelectorAll(".code-box");0<e.length&&e.forEach(function(e){var n=e.querySelector(".legend");n&&o(n,r),e.addEventListener("click",t)})}var r='<a href="#">'+(e&&e.text?e.text:"Выделить и скопировать:")+"</a>",i=e&&e.copiedText?e.copiedText:"Скопировано в буфер обмена!";"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=document.querySelector(e);n&&n.insertAdjacentHTML("afterend",t)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var o=n(1),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,a=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),n=e[a];try{e[a]=void 0;var o=!0}catch(e){}var r=u.call(e);return o&&(t?e[a]=n:delete e[a]),r}},function(e,t,n){var o=n(1),r=n(11),i=n(10),u="[object Null]",a="[object Undefined]",c=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?a:u:c&&c in Object(e)?r(e):i(e)}},function(e,t,n){var o=n(12),r=n(9),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&o(e)==i}},function(e,t,n){var o=n(3),r=n(13),i=NaN,u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return i;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=c.test(e);return n||l.test(e)?f(e.slice(2),n?2:8):a.test(e)?i:+e}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(15))},function(e,t,n){var o=n(2);e.exports=function(){return o.Date.now()}},function(e,t,n){var o=n(3),r=n(17),i=n(14),u="Expected a function",a=Math.max,c=Math.min;e.exports=function(e,t,n){var l,f,s,d,p,y,v=0,m=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError(u);function S(t){var n=l,o=f;return l=f=void 0,v=t,d=e.apply(o,n)}function h(e){var n=e-y;return void 0===y||n>=t||n<0||b&&e-v>=s}function j(){var e=r();if(h(e))return M(e);p=setTimeout(j,function(e){var n=t-(e-y);return b?c(n,s-(e-v)):n}(e))}function M(e){return p=void 0,g&&l?S(e):(l=f=void 0,d)}function _(){var e=r(),n=h(e);if(l=arguments,f=this,y=e,n){if(void 0===p)return function(e){return v=e,p=setTimeout(j,t),m?S(e):d}(y);if(b)return p=setTimeout(j,t),S(y)}return void 0===p&&(p=setTimeout(j,t)),d}return t=i(t)||0,o(n)&&(m=!!n.leading,s=(b="maxWait"in n)?a(i(n.maxWait)||0,t):s,g="trailing"in n?!!n.trailing:g),_.cancel=function(){void 0!==p&&clearTimeout(p),v=0,l=y=f=p=void 0},_.flush=function(){return void 0===p?d:M(r())},_}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("object"===o(FORUM.editor)){var e=function(e){var t=e.length,n=document.querySelector("#charcounter .charcount");n&&(n.innerText=t.toString())},t=document.getElementById("main-reply"),n=(0,u.default)(function(t){var n=t.target;return e(n.value)},15);if(t instanceof HTMLTextAreaElement){if((0,a.insertAfter)("p.areafield.required",'<div id="charcounter">Символов в сообщении: <span class="charcount">0</span></div>'),"object"===o(FORUM.topic)){var r=window.location.search.substr(4),i=localStorage.getItem("topic"+r);null!==i&&void 0!==i&&e(i)}["focus","blur","keypress","keyup","keydown","change","cut","paste","input","selectionchange","propertychange"].forEach(function(e){t.addEventListener(e,n)})}}};var r,i=n(18),u=(r=i)&&r.__esModule?r:{default:r},a=n(0)},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("object"===o(FORUM.editor)){var t=document.getElementById("font-area");t&&e.map(function(e){t.insertAdjacentHTML("beforeend",'<div style="font-family:'+e+'"><span>'+e+"</span> <img onclick=\"bbcode('[font="+e+"]','[/font]')\" src=\"/i/blank.gif\"> </div>")})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.profiles,n=void 0===t?[]:t,o=e.message,r=void 0===o?"Редактирование данного профиля для вас запрещено.":o;document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("profile");e&&0<n.length&&(e.style.display="none",n.forEach(function(t){if(UserID===t)return e.innerHTML='<p style="margin: 1em 0; line-height: 2">'+r+"</p>"}),e.style.display="")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.after,n=void 0===t?"navlogin":t,o=e.logins,r=void 0===o?[]:o;if(3===GroupID){var i=function(e){var t=e.target;if(t instanceof HTMLElement){var n=t.dataset,o=n.login,r=n.password,i=new FormData;i.append("form_sent","1"),i.append("req_username",o),i.append("req_password",r),i.append("login","Submit"),fetch(window.location.origin+"/login.php?action=in",{body:i,credentials:"include",headers:{"Cache-Control":"max-age=0","Upgrade-Insecure-Requests":"1"},method:"POST"}).then(function(e){200===e.status&&window.location.reload()})}};if(0<r.length){var u=r.map(function(e,t){var n=e.id,o=e.link,r=e.login,i=e.password;return'<li id="'+(n||"navAdd"+t)+'"><a class="js_login" style="cursor: pointer;" data-login="'+r+'" data-password="'+i+'">'+o+"</a></li>"}),a=document.getElementById(n);a&&a.insertAdjacentHTML("afterend",u.join("")),document.querySelectorAll("a.js_login").forEach(function(e){return e&&e.addEventListener("click",i)})}}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(null!==e){var t=e.icon,n=void 0===t?"":t,r=e.after,i=void 0===r?".pa-title":r,u=e.before,a=void 0===u?null:u;""===n||"object"===o(FORUM.topic)&&document.querySelectorAll(".post-author ul").forEach(function(e){if(!e.querySelector(".pa-avatar")){var t=e.querySelector(".pa-author a"),o=t&&t.textContent||"guest",r='<li class="pa-avatar item2 default-icon"><img src="'+n+'" alt="'+o+'" style="cursor: pointer;"></li>';if(a){var u=e.querySelector(a);return u&&u.insertAdjacentHTML("beforebegin",r)}if(i){var c=e.querySelector(i);return c&&c.insertAdjacentHTML("afterend",r)}}})}}Object.defineProperty(t,"__esModule",{value:!0}),t.setDefaultIcon=r,t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.disableProfiles=t.fastSubmit=t.selectCodeBox=t.charCounter=t.addFontsToList=void 0,t.bss=function(e){var t=e.disabledProfiles,n=e.defaultIcon,u=e.fastLogin;(0,f.addCtrlClicks)(),(0,f.originalUploadedFirst)(),t&&(0,i.default)(t),n&&(0,o.default)(n),u&&(0,r.default)(u)};var o=d(n(23)),r=d(n(22)),i=d(n(21)),u=d(n(20)),a=d(n(19)),c=d(n(7)),l=d(n(6)),f=n(5),s=d(n(4));function d(e){return e&&e.__esModule?e:{default:e}}t.addFontsToList=u.default,t.charCounter=a.default,t.selectCodeBox=c.default,t.fastSubmit=l.default,t.disableProfiles=s.default}]);