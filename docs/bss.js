var basicScriptSet=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t,n){var o=n(1).Symbol;e.exports=o},function(e,t,n){var o=n(11),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e,t){e&&(e.innerHTML=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("object"===o(FORUM.topic)||"object"===o(FORUM.editor)){var t=function(e){console.log("worked?"),e.preventDefault();var t=e.target;if(t instanceof HTMLElement&&("PRE"===t.tagName||"A"===t.tagName)){var n=t.closest(".code-box"),o="PRE"===t.tagName?t:n&&n.querySelector("pre"),i=n&&n.querySelector(".legend");if(console.log("el to select is pre: ",o instanceof HTMLPreElement),o instanceof HTMLPreElement){!function(e){var t=document.createRange();t.selectNodeContents(e);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}(o);var a,l=function(){var e;try{e=document.execCommand("copy")}catch(t){e=!1}return e}();if(!0===l&&i)r(i,u),window.clearTimeout(a),a=window.setTimeout(function(){return r(i,c)},3e3)}}},n=document.querySelectorAll(".code-box"),i=e&&e.text?e.text:"Выделить и скопировать:",c='<a href="#">'+i+"</a>",u=e&&e.copiedText?e.copiedText:"Скопировано в буфер обмена!";0<n.length&&n.forEach(function(e){var n=e.querySelector(".legend");n&&r(n,c),e.addEventListener("click",t)})}}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var o=n(0),r=Object.prototype,i=r.hasOwnProperty,c=r.toString,u=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var o=!0}catch(e){}var r=c.call(e);return o&&(t?e[u]=n:delete e[u]),r}},function(e,t,n){var o=n(0),r=n(6),i=n(5),c="[object Null]",u="[object Undefined]",a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:c:a&&a in Object(e)?r(e):i(e)}},function(e,t,n){var o=n(7),r=n(4),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&o(e)==i}},function(e,t,n){var o=n(2),r=n(8),i=NaN,c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return i;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=a.test(e);return n||l.test(e)?f(e.slice(2),n?2:8):u.test(e)?i:+e}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(10))},function(e,t,n){var o=n(1);e.exports=function(){return o.Date.now()}},function(e,t,n){var o=n(2),r=n(12),i=n(9),c="Expected a function",u=Math.max,a=Math.min;e.exports=function(e,t,n){var l,f,s,d,p,y,v=0,m=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError(c);function S(t){var n=l,o=f;return l=f=void 0,v=t,d=e.apply(o,n)}function h(e){var n=e-y;return void 0===y||n>=t||n<0||b&&e-v>=s}function j(){var e=r();if(h(e))return M(e);p=setTimeout(j,function(e){var n=t-(e-y);return b?a(n,s-(e-v)):n}(e))}function M(e){return p=void 0,g&&l?S(e):(l=f=void 0,d)}function x(){var e=r(),n=h(e);if(l=arguments,f=this,y=e,n){if(void 0===p)return function(e){return v=e,p=setTimeout(j,t),m?S(e):d}(y);if(b)return p=setTimeout(j,t),S(y)}return void 0===p&&(p=setTimeout(j,t)),d}return t=i(t)||0,o(n)&&(m=!!n.leading,s=(b="maxWait"in n)?u(i(n.maxWait)||0,t):s,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==p&&clearTimeout(p),v=0,l=y=f=p=void 0},x.flush=function(){return void 0===p?d:M(r())},x}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("object"===o(FORUM.editor)){var e=function(e){var t=e.length,n=document.querySelector("#charcounter .charcount");n&&(n.innerText=t.toString())},t=document.getElementById("main-reply"),n=document.querySelector("#post p.areafield.required"),r=(0,c.default)(function(t){var n=t.target;return e(n.value)},15);if(t instanceof HTMLTextAreaElement){if(n&&n.insertAdjacentHTML("afterend",'<div id="charcounter">Символов в сообщении: <span class="charcount">0</span></div>'),"object"===o(FORUM.topic)){var i=window.location.search.substr(4),u=localStorage.getItem("topic"+i);null!==u&&void 0!==u&&e(u)}["focus","blur","keypress","keyup","keydown","change","cut","paste","input","selectionchange","propertychange"].forEach(function(e){t.addEventListener(e,r)})}}};var r,i=n(13),c=(r=i)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("object"===o(FORUM.editor)){var t=document.getElementById("font-area");t&&e.map(function(e){t.insertAdjacentHTML("beforeend",'\n<div style="font-family:'+e+'">\n  <span>'+e+"</span>\n  <img onclick=\"bbcode('[font="+e+"]','[/font]')\" src=\"/i/blank.gif\">\n</div>")})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.profiles,n=void 0===t?[]:t,o=e.message,r=void 0===o?"Редактирование данного профиля для вас запрещено.":o;$().pun_mainReady(function(){var e=document.getElementById("profile");e&&0<n.length&&(e.style.display="none",n.forEach(function(t){if(UserID===t)return e.innerHTML='<p style="margin: 1em 0; line-height: 2">'+r+"</p>"}),e.style.display="")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.after,n=void 0===t?"navlogin":t,o=e.logins,r=void 0===o?[]:o;if(3===GroupID){var i=function(e){var t=e.target;if(t instanceof HTMLElement){var n=t.dataset,o=n.login,r=n.password,i=new FormData;i.append("form_sent","1"),i.append("req_username",o),i.append("req_password",r),i.append("login","Submit"),fetch(window.location.origin+"/login.php?action=in",{body:i,credentials:"include",headers:{"Cache-Control":"max-age=0","Upgrade-Insecure-Requests":"1"},method:"POST"}).then(function(e){200===e.status&&window.location.reload()})}};if(0<r.length){var c=r.map(function(e,t){var n=e.id,o=e.link,r=e.login,i=e.password;return'<li id="'+(n||"navAdd"+t)+'"><a class="js_login" style="cursor: pointer;" data-login="'+r+'" data-password="'+i+'">'+o+"</a></li>"}),u=document.getElementById(n);u&&u.insertAdjacentHTML("afterend",c.join("")),document.querySelectorAll("a.js_login").forEach(function(e){return e&&e.addEventListener("click",i)})}}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(null!==e){var t=e.icon,n=void 0===t?"":t,r=e.after,i=void 0===r?".pa-title":r,c=e.before,u=void 0===c?null:c;""===n||"object"===o(FORUM.topic)&&document.querySelectorAll(".post-author ul").forEach(function(e){if(!e.querySelector(".pa-avatar")){var t=e.querySelector(".pa-author a"),o=t&&t.textContent||"guest",r='<li class="pa-avatar item2 default-icon"><img src="'+n+'" alt="'+o+'" style="cursor: pointer;"></li>';if(u){var c=e.querySelector(u);return c&&c.insertAdjacentHTML("beforebegin",r)}if(i){var a=e.querySelector(i);return a&&a.insertAdjacentHTML("afterend",r)}}})}}Object.defineProperty(t,"__esModule",{value:!0}),t.setDefaultIcon=r,t.default=r},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.selectCodeBoxContents=t.charCounter=t.addFontsToList=void 0,t.bss=function(e){var t=e.disabledProfiles,n=e.defaultIcon,u=e.fastLogin;(function(){if("object"===o(FORUM.editor)){var e=document.getElementById("image-insert-format");if(e)e.innerHTML='<strong>Вставить как:</strong>\n      <br><br>\n      <select id="selected-insert-format">\n        <option value="viewer">Превью</option>\n        <option value="source" selected>Оригинал</option>\n      </select>'}})(),function(){function e(e){if(e.target instanceof HTMLElement){var t=e.target.parentNode;if(t instanceof HTMLElement){var n=t.id,o=n.toString().toLowerCase().split("-")[1];e.ctrlKey||e.altKey||e.metaKey?"image"===o?bbcode("[img]","[/img]"):"url"===o?bbcode('[url=""]',"[/url]"):bbcode("["+o+"]","[/"+o+"]"):FORUM.get("editor."+o+".onclick()")}}}if("object"===o(FORUM.editor)){var t=document.querySelectorAll("#button-link, #button-hide, #button-image, #button-spoiler, #button-video");t&&t.forEach(function(t){var n=t.querySelector("img");n&&(n.removeAttribute("onclick"),n.addEventListener("click",e))})}}(),(0,c.default)(t),(0,r.default)(n),(0,i.default)(u)};var r=f(n(18)),i=f(n(17)),c=f(n(16)),u=f(n(15)),a=f(n(14)),l=f(n(3));function f(e){return e&&e.__esModule?e:{default:e}}t.addFontsToList=u.default,t.charCounter=a.default,t.selectCodeBoxContents=l.default}]);