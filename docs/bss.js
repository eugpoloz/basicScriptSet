var basicScriptSet=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertAfter=void 0;var o,r=n(9),i=(o=r)&&o.__esModule?o:{default:o};t.insertAfter=i.default},function(e,t,n){var o=n(2).Symbol;e.exports=o},function(e,t,n){var o=n(17),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(){var e=document.querySelectorAll(".post-author .pa-author");0<e.length&&e.forEach(function(e){if(!e.querySelector("a")){var t=e.innerText||"";""!==t&&(e.innerHTML='<span class="acchide">Автор:&nbsp;</span><a href="javascript:to(\''+t+'\')" rel="nofollow">'+t+"</a>")}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("object"===o(FORUM.topic)){var t=parseInt(FORUM.topic.forum_id,10);return e?void(t===e&&r()):r()}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.profiles,n=void 0===t?[]:t,r=e.message,i=void 0===r?"Редактирование данного профиля для вас запрещено!":r;if(0<n.length&&"object"===("undefined"==typeof profile?"undefined":o(profile))){profile.style.display="none";var u=new Set(n);u.has(UserID)&&(profile.innerHTML='<p style="margin: 1em 0; line-height: 2; text-align: center;">'+i+"</p>"),profile.style.display=""}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.addCtrlClicks=function(){function e(e){var t=e.target,n=e.ctrlKey,o=e.metaKey,r=e.altKey;if(t instanceof HTMLElement){var i=t.parentNode;if(i instanceof HTMLElement){var u=i.id,c=u.substr(7);n||o||r?"image"===c?bbcode("[img]","[/img]"):"link"===c?bbcode('[url=""]',"[/url]"):bbcode("["+c+"]","[/"+c+"]"):FORUM.get("editor."+c+".onclick()")}}}if("object"===o(FORUM.editor)){var t=document.querySelectorAll("#button-link, #button-hide, #button-image, #button-spoiler, #button-video");t&&t.forEach(function(t){var n=t.querySelector("img");n&&(n.removeAttribute("onclick"),n.addEventListener("click",e))})}},t.originalUploadedFirst=function(){if("object"===o(FORUM.editor)){var e=document.getElementById("image-insert-format");if(e)return e.innerHTML='<strong>Вставить как:</strong>\n    <br><br>\n    <select id="selected-insert-format">\n      <option value="viewer">Превью</option>\n      <option value="source" selected>Оригинал</option>\n    </select>'}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("object"===o(FORUM.editor)&&"object"===o(FORUM.topic)){var e=document.querySelector("#main-reply"),t=document.querySelector('input[name="submit"]'),n=document.querySelector('input[name="preview"]');e instanceof HTMLTextAreaElement&&e.addEventListener("keydown",function(n){var o=n.keyCode,r=n.ctrlKey,i=n.metaKey;13===o&&(r||i)&&(t&&t.click(),e.value="")}),n?(0,r.insertAfter)('input[name="preview"]','<div id="fastsubmit">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>'):(0,r.insertAfter)('input[name="submit"]','<div id="fastsubmit">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>')}};var r=n(0)},function(e,t,n){"use strict";function o(e,t){e&&(e.innerHTML=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(e){e.preventDefault();var t=e.target;if(t instanceof HTMLElement&&("PRE"===t.tagName||"A"===t.tagName)){var n=t.closest(".code-box"),u="PRE"===t.tagName?t:n&&n.querySelector("pre"),c=n&&n.querySelector(".legend");if(u instanceof HTMLPreElement){!function(e){var t=document.createRange();t.selectNodeContents(e);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}(u);var a=function(){var e;try{e=document.execCommand("copy")}catch(t){e=!1}return e}();if(!0===a&&c){var l;o(c,i),window.clearTimeout(l),l=window.setTimeout(function(){return o(c,r)},3e3)}}}}function n(){var e=document.querySelectorAll(".code-box");0<e.length&&e.forEach(function(e){var n=e.querySelector(".legend");n&&o(n,r),e.addEventListener("click",t)})}var r='<a href="#">'+(e&&e.text?e.text:"Выделить и скопировать:")+"</a>",i=e&&e.copiedText?e.copiedText:"Скопировано в буфер обмена!";"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=document.querySelector(e);n&&n.insertAdjacentHTML("afterend",t)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var o=n(1),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(e){}var r=u.call(e);return o&&(t?e[c]=n:delete e[c]),r}},function(e,t,n){var o=n(1),r=n(12),i=n(11),u="[object Null]",c="[object Undefined]",a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:u:a&&a in Object(e)?r(e):i(e)}},function(e,t,n){var o=n(13),r=n(10),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&o(e)==i}},function(e,t,n){var o=n(3),r=n(14),i=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return i;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=a.test(e);return n||l.test(e)?f(e.slice(2),n?2:8):c.test(e)?i:+e}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(16))},function(e,t,n){var o=n(2);e.exports=function(){return o.Date.now()}},function(e,t,n){var o=n(3),r=n(18),i=n(15),u="Expected a function",c=Math.max,a=Math.min;e.exports=function(e,t,n){var l,f,s,d,p,y,v=0,m=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError(u);function S(t){var n=l,o=f;return l=f=void 0,v=t,d=e.apply(o,n)}function h(e){var n=e-y;return void 0===y||n>=t||n<0||b&&e-v>=s}function j(){var e=r();if(h(e))return M(e);p=setTimeout(j,function(e){var n=t-(e-y);return b?a(n,s-(e-v)):n}(e))}function M(e){return p=void 0,g&&l?S(e):(l=f=void 0,d)}function x(){var e=r(),n=h(e);if(l=arguments,f=this,y=e,n){if(void 0===p)return function(e){return v=e,p=setTimeout(j,t),m?S(e):d}(y);if(b)return p=setTimeout(j,t),S(y)}return void 0===p&&(p=setTimeout(j,t)),d}return t=i(t)||0,o(n)&&(m=!!n.leading,s=(b="maxWait"in n)?c(i(n.maxWait)||0,t):s,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==p&&clearTimeout(p),v=0,l=y=f=p=void 0},x.flush=function(){return void 0===p?d:M(r())},x}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"Символов в сообщении";if("object"===o(FORUM.editor)){var t=function(e){var t=e.length,n=document.querySelector("#charcounter .charcount");n&&(n.innerText=t.toString())},n=document.getElementById("main-reply"),r=(0,u.default)(function(e){var n=e.target;return t(n.value)},15);if(n instanceof HTMLTextAreaElement){if((0,c.insertAfter)("p.areafield.required",'<div id="charcounter">'+e+': <span class="charcount">0</span></div>'),"object"===o(FORUM.topic)){var i=window.location.search.substr(4),a=localStorage.getItem("topic"+i);null!==a&&void 0!==a&&t(a)}["focus","blur","keypress","keyup","keydown","change","cut","paste","input","selectionchange","propertychange"].forEach(function(e){n.addEventListener(e,r)})}}};var r,i=n(19),u=(r=i)&&r.__esModule?r:{default:r},c=n(0)},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("object"===o(FORUM.editor)){var t=document.getElementById("font-area");t&&e.map(function(e){t.insertAdjacentHTML("beforeend",'<div style="font-family:'+e+'"><span>'+e+"</span> <img onclick=\"bbcode('[font="+e+"]','[/font]')\" src=\"/i/blank.gif\"> </div>")})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.after,n=void 0===t?"navlogin":t,o=e.logins,r=void 0===o?[]:o;if(3===GroupID){var i=function(e){var t=e.target;if(t instanceof HTMLElement){var n=t.dataset,o=n.login,r=n.password,i=new FormData;i.append("form_sent","1"),i.append("req_username",o),i.append("req_password",r),i.append("login","Submit"),fetch(window.location.origin+"/login.php?action=in",{body:i,credentials:"include",headers:{"Cache-Control":"max-age=0","Upgrade-Insecure-Requests":"1"},method:"POST"}).then(function(e){200===e.status&&window.location.reload()})}};if(0<r.length){var u=r.map(function(e,t){var n=e.id,o=e.link,r=e.login,i=e.password;return'<li id="'+(n||"navAdd"+t)+'"><a class="js_login" style="cursor: pointer;" data-login="'+r+'" data-password="'+i+'">'+o+"</a></li>"}),c=document.getElementById(n);c&&c.insertAdjacentHTML("afterend",u.join("")),document.querySelectorAll("a.js_login").forEach(function(e){return e&&e.addEventListener("click",i)})}}}},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(null!==e){var t=e.icon,n=void 0===t?"":t,r=e.after,i=void 0===r?".pa-title":r,u=e.before,c=void 0===u?null:u;""===n||"object"===o(FORUM.topic)&&document.querySelectorAll(".post-author ul").forEach(function(e){if(!e.querySelector(".pa-avatar")){var t=e.querySelector(".pa-author a"),o=t&&t.textContent||"guest",r='<li class="pa-avatar item2 default-icon"><img src="'+n+'" alt="'+o+'" style="cursor: pointer;"></li>';if(c){var u=e.querySelector(c);return u&&u.insertAdjacentHTML("beforebegin",r)}if(i){var a=e.querySelector(i);return a&&a.insertAdjacentHTML("afterend",r)}}})}}Object.defineProperty(t,"__esModule",{value:!0}),t.setDefaultIcon=r,t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clickableGuestNames=t.disableProfiles=t.fastSubmit=t.selectCodeBox=t.charCounter=t.addFontsToList=t.createFastLoginLinks=t.setDefaultIcon=void 0,t.enhanceTextarea=function(){(0,u.addCtrlClicks)(),(0,u.originalUploadedFirst)()};var o=d(n(21)),r=d(n(20)),i=d(n(7)),u=n(6),c=d(n(23)),a=d(n(8)),l=d(n(4)),f=d(n(22)),s=d(n(5));function d(e){return e&&e.__esModule?e:{default:e}}t.setDefaultIcon=c.default,t.createFastLoginLinks=f.default,t.addFontsToList=o.default,t.charCounter=r.default,t.selectCodeBox=a.default,t.fastSubmit=i.default,t.disableProfiles=s.default,t.clickableGuestNames=l.default}]);