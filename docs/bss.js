var basicScriptSet=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e,n){var o=n(1).Symbol;t.exports=o},function(t,e,n){var o=n(10),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var o=n(0),r=Object.prototype,i=r.hasOwnProperty,c=r.toString,u=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var o=!0}catch(t){}var r=c.call(t);return o&&(e?t[u]=n:delete t[u]),r}},function(t,e,n){var o=n(0),r=n(5),i=n(4),c="[object Null]",u="[object Undefined]",a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:c:a&&a in Object(t)?r(t):i(t)}},function(t,e,n){var o=n(6),r=n(3),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&o(t)==i}},function(t,e,n){var o=n(2),r=n(7),i=NaN,c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return i;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=a.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):u.test(t)?i:+t}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(9))},function(t,e,n){var o=n(1);t.exports=function(){return o.Date.now()}},function(t,e,n){var o=n(2),r=n(11),i=n(8),c="Expected a function",u=Math.max,a=Math.min;t.exports=function(t,e,n){var l,f,s,d,p,y,v=0,m=!1,b=!1,g=!0;if("function"!=typeof t)throw new TypeError(c);function S(e){var n=l,o=f;return l=f=void 0,v=e,d=t.apply(o,n)}function h(t){var n=t-y;return void 0===y||n>=e||n<0||b&&t-v>=s}function j(){var t=r();if(h(t))return M(t);p=setTimeout(j,function(t){var n=e-(t-y);return b?a(n,s-(t-v)):n}(t))}function M(t){return p=void 0,g&&l?S(t):(l=f=void 0,d)}function x(){var t=r(),n=h(t);if(l=arguments,f=this,y=t,n){if(void 0===p)return function(t){return v=t,p=setTimeout(j,e),m?S(t):d}(y);if(b)return p=setTimeout(j,e),S(y)}return void 0===p&&(p=setTimeout(j,e)),d}return e=i(e)||0,o(n)&&(m=!!n.leading,s=(b="maxWait"in n)?u(i(n.maxWait)||0,e):s,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==p&&clearTimeout(p),v=0,l=y=f=p=void 0},x.flush=function(){return void 0===p?d:M(r())},x}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if("object"===o(FORUM.editor)){var t=function(t){var e=t.length,n=document.querySelector("#charcounter .charcount");n&&(n.innerText=e.toString())},e=document.getElementById("main-reply"),n=document.querySelector("#post p.areafield.required"),r=(0,c.default)(function(e){var n=e.target;return t(n.value)},15);if(e instanceof HTMLTextAreaElement){if(n&&n.insertAdjacentHTML("afterend",'<div id="charcounter">Символов в сообщении: <span class="charcount">0</span></div>'),"object"===o(FORUM.topic)){var i=window.location.search.substr(4),u=localStorage.getItem("topic"+i);null!==u&&void 0!==u&&t(u)}["focus","blur","keypress","keyup","keydown","change","cut","paste","input","selectionchange","propertychange"].forEach(function(t){e.addEventListener(t,r)})}}};var r,i=n(12),c=(r=i)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("object"===o(FORUM.editor)){var e=document.getElementById("font-area");e&&t.map(function(t){e.insertAdjacentHTML("beforeend",'\n<div style="font-family:'+t+'">\n  <span>'+t+"</span>\n  <img onclick=\"bbcode('[font="+t+"]','[/font]')\" src=\"/i/blank.gif\">\n</div>")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.profiles,n=void 0===e?[]:e,o=t.message,r=void 0===o?"Редактирование данного профиля для вас запрещено.":o;$().pun_mainReady(function(){var t=document.getElementById("profile");t&&0<n.length&&(t.style.display="none",n.forEach(function(e){if(UserID===e)return t.innerHTML='<p style="margin: 1em 0; line-height: 2">'+r+"</p>"}),t.style.display="")})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.after,n=void 0===e?"navlogin":e,o=t.logins,r=void 0===o?[]:o;if(3===GroupID){var i=function(t){var e=t.target;if(e instanceof HTMLElement){var n=e.dataset,o=n.login,r=n.password,i=new FormData;i.append("form_sent","1"),i.append("req_username",o),i.append("req_password",r),i.append("login","Submit"),fetch(window.location.origin+"/login.php?action=in",{body:i,credentials:"include",headers:{"Cache-Control":"max-age=0","Upgrade-Insecure-Requests":"1"},method:"POST"}).then(function(t){200===t.status&&window.location.reload()})}};if(0<r.length){var c=r.map(function(t,e){var n=t.id,o=t.link,r=t.login,i=t.password;return'<li id="'+(n||"navAdd"+e)+'"><a class="js_login" style="cursor: pointer;" data-login="'+r+'" data-password="'+i+'">'+o+"</a></li>"}),u=document.getElementById(n);u&&u.insertAdjacentHTML("afterend",c.join("")),document.querySelectorAll("a.js_login").forEach(function(t){return t&&t.addEventListener("click",i)})}}}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(null!==t){var e=t.icon,n=void 0===e?"":e,r=t.after,i=void 0===r?".pa-title":r,c=t.before,u=void 0===c?null:c;""===n||"object"===o(FORUM.topic)&&document.querySelectorAll(".post-author ul").forEach(function(t){if(!t.querySelector(".pa-avatar")){var e=t.querySelector(".pa-author a"),o=e&&e.textContent||"guest",r='<li class="pa-avatar item2 default-icon"><img src="'+n+'" alt="'+o+'" style="cursor: pointer;"></li>';if(u){var c=t.querySelector(u);return c&&c.insertAdjacentHTML("beforebegin",r)}if(i){var a=t.querySelector(i);return a&&a.insertAdjacentHTML("afterend",r)}}})}}Object.defineProperty(e,"__esModule",{value:!0}),e.setDefaultIcon=r,e.default=r},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.selectCodeBoxContents=e.charCounter=e.addFontsToList=void 0,e.bss=function(t){var e=t.disabledProfiles,n=t.defaultIcon,u=t.fastLogin;(function(){if("object"===o(FORUM.editor)){var t=document.getElementById("image-insert-format");if(t)t.innerHTML='<strong>Вставить как:</strong>\n      <br><br>\n      <select id="selected-insert-format">\n        <option value="viewer">Превью</option>\n        <option value="source" selected>Оригинал</option>\n      </select>'}})(),function(){function t(t){if(t.target instanceof HTMLElement){var e=t.target.parentNode;if(e instanceof HTMLElement){var n=e.id,o=n.toString().toLowerCase().split("-")[1];t.ctrlKey||t.altKey||t.metaKey?"image"===o?bbcode("[img]","[/img]"):"url"===o?bbcode('[url=""]',"[/url]"):bbcode("["+o+"]","[/"+o+"]"):FORUM.get("editor."+o+".onclick()")}}}if("object"===o(FORUM.editor)){var e=document.querySelectorAll("#button-link, #button-hide, #button-image, #button-spoiler, #button-video");e&&e.forEach(function(e){var n=e.querySelector("img");n&&(n.removeAttribute("onclick"),n.addEventListener("click",t))})}}(),(0,c.default)(e),(0,r.default)(n),(0,i.default)(u)};var r=f(n(17)),i=f(n(16)),c=f(n(15)),u=f(n(14)),a=f(n(13)),l=f(n(19));function f(t){return t&&t.__esModule?t:{default:t}}e.addFontsToList=u.default,e.charCounter=a.default,e.selectCodeBoxContents=l.default},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("object"===o(FORUM.topic)||"object"===o(FORUM.editor)){var e=function(t){t.preventDefault();var e=t.target;if(e instanceof HTMLElement){var n=e.closest(".code-box"),o="pre"===e.tagName?e:n&&n.querySelector("pre");if(o instanceof HTMLPreElement){!function(t){var e=document.createRange();e.selectNodeContents(t);var n=window.getSelection();n.removeAllRanges(),n.addRange(e)}(o);var r=function(){var t;try{t=document.execCommand("copy")}catch(e){t=!1}return t}();console.log(r)}}},n=document.querySelectorAll(".code-box");if(0<n.length){var r=t.text,i=void 0===r?"Выделить код:":r;n.forEach(function(t){var n=t.querySelector(".legend");n&&(n.innerHTML='<a href="#">'+i+"</a>"),t.addEventListener("click",e)})}}}}]);