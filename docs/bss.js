var basicScriptSet=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=25)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertAfter=void 0;var o,r=n(12),i=(o=r)&&o.__esModule?o:{default:o};e.insertAfter=i.default},function(t,e,n){var o=n(2).Symbol;t.exports=o},function(t,e,n){var o=n(20),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){"use strict";function o(t){var e=t.name,n=t.author,o=t.url,r=t.contacts,i=void 0===r?[]:r,a="";return 0<i.length&&(a=i.map(function(t){var e=t.url,n=t.title;return'<a href="'+e+'" target="_blank" title="'+n+'">'+n+"</a>"}).join(" | ")),'\n    <li style="padding: 1rem 0; line-height: inherit;">\n      <strong>\n        <a href="'+o+'" target="_blank" title="'+e+'">'+e+"</a>\n      </strong>\n      <br/>\n      <span>\n        © "+n+"\n        "+(a?" ("+a+")":"")+"\n      </span>\n    </li>\n  "}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,n,r=!Array.isArray(t)&&(null==(n=t)?n:n.text)||"Скрипты форума",i=Array.isArray(t)?t:(null==(e=t)?e:e.credits)||[];return function(t){var e=t.text,n=t.credits,r=document.getElementById("pun-about");if(r instanceof HTMLElement){var i=r.querySelector("p.container"),a='\n      <style>\n        .jGrowl-notification.jGrowl-credits {\n          width: auto;\n        }\n        .jGrowl-notification.jGrowl-credits .jGrowl-header {\n          position: relative;\n          z-index: -1;\n        }\n        .jGrowl-notification.jGrowl-credits li:not(:last-of-type) {\n          border-bottom: 1px solid rgba(255,255,255,.25);\n        }\n        .jGrowl-notification.jGrowl-credits a {\n          color: #fff;\n        }\n        .jGrowl-notification.jGrowl-credits ul {\n          margin-bottom: 0;\n          padding: 0 1.5em;\n          line-height: 1.5;\n          border-top: 1px solid rgba(255,255,255,.25);\n        }\n        .jGrowl-notification.jGrowl-credits ul a:hover,\n        .jGrowl-notification.jGrowl-credits ul a:focus,\n        .jGrowl-notification.jGrowl-credits ul a:active {\n          text-decoration: none;\n        }\n      </style>\n      <a href="#" id="script-credit-trigger">\n        '+e+"\n      </a>";i instanceof HTMLElement?i.insertAdjacentHTML("afterbegin","<span>"+a+" | </span>"):r.insertAdjacentHTML("beforeend",'<p class="container"><span>'+a+"</span></p>");var c=document.getElementById("script-credit-trigger"),u=n.map(o).join("");c instanceof HTMLElement&&c.addEventListener("click",function(t){return t.preventDefault(),$.jGrowl("<ul>"+u+"</ul>",{header:'<strong style="line-height: 1.5;">'+e+"</strong>",theme:"jGrowl-credits",position:"bottom-right",sticky:!0})})}}({text:r,credits:[].concat([{name:"basicScriptSet",author:"eugpoloz (грандоченька смерти)",url:"https://github.com/eugpoloz/basicScriptSet",contacts:[{title:"lyl",url:"http://urchoice.rolka.su/messages.php?action=new&uid=4789"},{title:"github",url:"https://github.com/eugpoloz"}]}],function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(i))})}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.profiles,n=void 0===e?[]:e,r=t.message,i=void 0===r?"Редактирование данного профиля для вас запрещено!":r;if(0<n.length&&"object"===("undefined"==typeof profile?"undefined":o(profile))){profile.style.display="none";var a=new Set(n);a.has(UserID)&&(profile.innerHTML='<p style="margin: 1em 0; line-height: 2; text-align: center;">'+i+"</p>"),profile.style.display=""}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.after,n=void 0===e?"navlogin":e,o=t.logins,r=void 0===o?[]:o;if(3===GroupID){var i=function(t){var e=t.target;if(e instanceof HTMLElement){var n=e.dataset,o=n.login,r=n.password,i=new FormData;i.append("form_sent","1"),i.append("req_username",o),i.append("req_password",r),i.append("login","Submit"),fetch(window.location.origin+"/login.php?action=in",{body:i,credentials:"include",headers:{"Cache-Control":"max-age=0","Upgrade-Insecure-Requests":"1"},method:"POST"}).then(function(t){200===t.status&&window.location.reload()})}};if(0<r.length){var a=r.map(function(t,e){var n=t.id,o=t.link,r=t.login,i=t.password;return'<li id="'+(n||"navAdd"+e)+'"><a class="js_login" style="cursor: pointer;" data-login="'+r+'" data-password="'+i+'">'+o+"</a></li>"}),c=document.getElementById(n);c instanceof HTMLElement&&c.insertAdjacentHTML("afterend",a.join("")),document.querySelectorAll("a.js_login").forEach(function(t){return t.addEventListener("click",i)})}}}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(){var t=document.querySelectorAll(".post-author .pa-author");0<t.length&&t.forEach(function(t){if(!t.querySelector("a")){var e=t.innerText||"";""!==e&&(t.innerHTML='<span class="acchide">Автор:&nbsp;</span><a href="javascript:to(\''+e+'\')" rel="nofollow">'+e+"</a>")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("object"===o(FORUM.topic)){var e=+FORUM.topic.forum_id;return t?void(e===t&&r()):r()}}},function(t,e,n){"use strict";function o(t,e){t&&(t.innerHTML=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,n,r='<a href="#">'+((null==(n=t)?n:n.text)||"Выделить и скопировать:")+"</a>",i=(null==(e=t)?e:e.copiedText)||"Скопировано в буфер обмена!";function a(t){t.preventDefault();var e=t.target;if(e instanceof HTMLElement&&("PRE"===e.tagName||"A"===e.tagName)){var n=e.closest(".code-box");if(n instanceof HTMLElement){var a="PRE"===e.tagName?e:n.querySelector("pre"),c=n.querySelector(".legend");if(a instanceof HTMLPreElement){!function(t){var e=document.createRange();e.selectNodeContents(t);var n=window.getSelection();n.removeAllRanges(),n.addRange(e)}(a);var u=function(){var t;try{t=document.execCommand("copy")}catch(e){t=!1}return t}();if(!0===u&&c){var l;o(c,i),window.clearTimeout(l),l=window.setTimeout(function(){return o(c,r)},3e3)}}}}}function c(){var t=document.querySelectorAll(".code-box");0<t.length&&t.forEach(function(t){var e=t.querySelector(".legend");e&&o(e,r),t.addEventListener("click",a)})}"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t){var e=t.icon,n=t.before,r=void 0===n?null:n,i=t.after,a=void 0===i?".pa-title":i;"object"===o(FORUM.topic)&&document.querySelectorAll(".post-author ul").forEach(function(t){if(!t.querySelector(".pa-avatar")){var n=t.querySelector(".pa-author a"),o=n&&n.textContent||"guest",i='<li class="pa-avatar item2 default-icon"><img src="'+e+'" alt="'+o+'" style="cursor: pointer;"></li>';if(r){var c=t.querySelector(r);if(c instanceof HTMLElement)return c.insertAdjacentHTML("beforebegin",i)}if(a){var u=t.querySelector(a);if(u instanceof HTMLElement)return u.insertAdjacentHTML("afterend",i)}}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return null==t?void 0:r("string"==typeof t?{icon:t}:t)}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.addCtrlClicks=function(){function t(t){var e=t.target,n=t.ctrlKey,o=t.metaKey,r=t.altKey;if(e instanceof HTMLElement){var i=e.parentNode;if(i instanceof HTMLElement){var a=i.id,c=a.substr(7);n||o||r?"image"===c?bbcode("[img]","[/img]"):"link"===c?bbcode('[url=""]',"[/url]"):bbcode("["+c+"]","[/"+c+"]"):FORUM.get("editor."+c+".onclick()")}}}if("object"===o(FORUM.editor)){var e=document.querySelectorAll("#button-link, #button-hide, #button-image, #button-spoiler, #button-video");e&&e.forEach(function(e){var n=e.querySelector("img");n&&(n.removeAttribute("onclick"),n.addEventListener("click",t))})}},e.originalUploadedFirst=function(){if("object"===o(FORUM.editor)){var t=document.getElementById("image-insert-format");if(t)return t.innerHTML='<strong>Вставить как:</strong>\n    <br><br>\n    <select id="selected-insert-format">\n      <option value="viewer">Превью</option>\n      <option value="source" selected>Оригинал</option>\n    </select>'}}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if("object"===o(FORUM.editor)&&"object"===o(FORUM.topic)){var t=document.querySelector("#main-reply"),e=document.querySelector('input[name="submit"]');t instanceof HTMLTextAreaElement&&t.addEventListener("keydown",function(n){var o=n.keyCode,r=n.ctrlKey,i=n.metaKey;13===o&&(r||i)&&(e&&e.click(),t.value="")});var n=document.querySelector('input[name="preview"]');n?(0,r.insertAfter)('input[name="preview"]','<div id="fastsubmit">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>'):(0,r.insertAfter)('input[name="submit"]','<div id="fastsubmit">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>')}};var r=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=document.querySelector(t);n&&n.insertAdjacentHTML("afterend",e)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var o=n(1),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(t){}var r=a.call(t);return o&&(e?t[c]=n:delete t[c]),r}},function(t,e,n){var o=n(1),r=n(15),i=n(14),a="[object Null]",c="[object Undefined]",u=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:a:u&&u in Object(t)?r(t):i(t)}},function(t,e,n){var o=n(16),r=n(13),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&o(t)==i}},function(t,e,n){var o=n(3),r=n(17),i=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return i;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=u.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):c.test(t)?i:+t}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(19))},function(t,e,n){var o=n(2);t.exports=function(){return o.Date.now()}},function(t,e,n){var o=n(3),r=n(21),i=n(18),a="Expected a function",c=Math.max,u=Math.min;t.exports=function(t,e,n){var l,f,s,d,p,y,m=0,v=!1,b=!1,g=!0;if("function"!=typeof t)throw new TypeError(a);function h(e){var n=l,o=f;return l=f=void 0,m=e,d=t.apply(o,n)}function S(t){var n=t-y;return void 0===y||n>=e||n<0||b&&t-m>=s}function j(){var t=r();if(S(t))return M(t);p=setTimeout(j,function(t){var n=e-(t-y);return b?u(n,s-(t-m)):n}(t))}function M(t){return p=void 0,g&&l?h(t):(l=f=void 0,d)}function w(){var t=r(),n=S(t);if(l=arguments,f=this,y=t,n){if(void 0===p)return function(t){return m=t,p=setTimeout(j,e),v?h(t):d}(y);if(b)return p=setTimeout(j,e),h(y)}return void 0===p&&(p=setTimeout(j,e)),d}return e=i(e)||0,o(n)&&(v=!!n.leading,s=(b="maxWait"in n)?c(i(n.maxWait)||0,e):s,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=y=f=p=void 0},w.flush=function(){return void 0===p?d:M(r())},w}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"Символов в сообщении";if("object"===o(FORUM.editor)){var e=function(t){var e=t.length,n=document.querySelector("#charcounter .charcount");n&&(n.innerText=e.toString())},n=document.getElementById("main-reply"),r=(0,a.default)(function(t){var n=t.target;return e(n.value)},15);if(n instanceof HTMLTextAreaElement){if((0,c.insertAfter)("p.areafield.required",'<div id="charcounter">'+t+': <span class="charcount">0</span></div>'),"object"===o(FORUM.topic)){var i=window.location.search.substr(4),u=localStorage.getItem("topic"+i);null!==u&&void 0!==u&&e(u)}["focus","blur","keypress","keyup","keydown","change","cut","paste","input","selectionchange","propertychange"].forEach(function(t){n.addEventListener(t,r)})}}};var r,i=n(22),a=(r=i)&&r.__esModule?r:{default:r},c=n(0)},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("object"===o(FORUM.editor)){var e=document.getElementById("font-area");if(e instanceof HTMLElement){var n=t.map(r).join("");return void e.insertAdjacentHTML("beforeend",n)}}};var r=function(t){return'<div style="font-family:'+t+'">\n    <span>'+t+"</span> <img onclick=\"bbcode('[font="+t+"]','[/font]')\" src=\"/i/blank.gif\">\n  </div>"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addScriptCredits=e.addGuestNameClicks=e.disableProfiles=e.submitOnHotkey=e.selectCodeBox=e.countTextareaCharacters=e.addFontsToList=e.createFastLoginLinks=e.setDefaultIcon=void 0,e.enhanceTextarea=function(){(0,a.addCtrlClicks)(),(0,a.originalUploadedFirst)()};var o=p(n(24)),r=p(n(23)),i=p(n(11)),a=n(10),c=p(n(9)),u=p(n(8)),l=p(n(7)),f=p(n(6)),s=p(n(5)),d=p(n(4));function p(t){return t&&t.__esModule?t:{default:t}}e.setDefaultIcon=c.default,e.createFastLoginLinks=f.default,e.addFontsToList=o.default,e.countTextareaCharacters=r.default,e.selectCodeBox=u.default,e.submitOnHotkey=i.default,e.disableProfiles=s.default,e.addGuestNameClicks=l.default,e.addScriptCredits=d.default}]);