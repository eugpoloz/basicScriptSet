var basicScriptSet=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.profiles,n=void 0===e?[]:e,o=t.message,r=void 0===o?"Редактирование данного профиля для вас запрещено.":o;$().pun_mainReady(function(){var t=document.getElementById("profile");t&&0<n.length&&(t.style.display="none",n.forEach(function(e){if(UserID===e)return t.innerHTML='<p style="margin: 1em 0; line-height: 2">'+r+"</p>"}),t.style.display="")})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.after,n=void 0===e?"navlogin":e,o=t.logins,r=void 0===o?[]:o;if(3===GroupID){var i=function(t){var e=t.target;if(e instanceof HTMLElement){var n=e.dataset,o=n.login,r=n.password,i=new FormData;i.append("form_sent","1"),i.append("req_username",o),i.append("req_password",r),i.append("login","Submit"),fetch(window.location.origin+"/login.php?action=in",{body:i,credentials:"include",headers:{"Cache-Control":"max-age=0","Upgrade-Insecure-Requests":"1"},method:"POST"}).then(function(t){200===t.status&&window.location.reload()})}};if(0<r.length){var u=r.map(function(t,e){var n=t.id,o=t.link,r=t.login,i=t.password;return'<li id="'+(n||"navAdd"+e)+'"><a class="js_login" style="cursor: pointer;" data-login="'+r+'" data-password="'+i+'">'+o+"</a></li>"}),c=document.getElementById(n);c&&c.insertAdjacentHTML("afterend",u.join("")),document.querySelectorAll("a.js_login").forEach(function(t){return t&&t.addEventListener("click",i)})}}}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(null!==t){var e=t.icon,n=void 0===e?"":e,r=t.after,i=void 0===r?".pa-title":r,u=t.before,c=void 0===u?null:u;""===n||"object"===o(FORUM.topic)&&document.querySelectorAll(".post-author ul").forEach(function(t){if(!t.querySelector(".pa-avatar")){var e=t.querySelector(".pa-author a"),o=e&&e.textContent||"guest",r='<li class="pa-avatar item2 default-icon"><img src="'+n+'" alt="'+o+'" style="cursor: pointer;"></li>';if(c){var u=t.querySelector(c);return u&&u.insertAdjacentHTML("beforebegin",r)}if(i){var a=t.querySelector(i);return a&&a.insertAdjacentHTML("afterend",r)}}})}}Object.defineProperty(e,"__esModule",{value:!0}),e.setDefaultIcon=r,e.default=r},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.charCounter=e.addFontsToList=void 0,e.bss=function(t){var e=t.disabledProfiles,n=t.defaultIcon,c=t.fastLogin;(function(){if("object"===o(FORUM.editor)){var t=document.getElementById("image-insert-format");if(t)t.innerHTML='<strong>Вставить как:</strong>\n      <br><br>\n      <select id="selected-insert-format">\n        <option value="viewer">Превью</option>\n        <option value="source" selected>Оригинал</option>\n      </select>'}})(),function(){function t(t){if(t.target instanceof HTMLElement){var e=t.target.parentNode;if(e instanceof HTMLElement){var n=e.id,o=n.toString().toLowerCase().split("-")[1];t.ctrlKey||t.altKey||t.metaKey?"image"===o?bbcode("[img]","[/img]"):"url"===o?bbcode('[url=""]',"[/url]"):bbcode("["+o+"]","[/"+o+"]"):FORUM.get("editor."+o+".onclick()")}}}if("object"===o(FORUM.editor)){var e=document.querySelectorAll("#button-link, #button-hide, #button-image, #button-spoiler, #button-video");e&&e.forEach(function(e){var n=e.querySelector("img");n&&(n.removeAttribute("onclick"),n.addEventListener("click",t))})}}(),(0,u.default)(e),(0,r.default)(n),(0,i.default)(c)};var r=f(n(2)),i=f(n(1)),u=f(n(0)),c=f(n(4)),a=f(n(18));function f(t){return t&&t.__esModule?t:{default:t}}e.addFontsToList=c.default,e.charCounter=a.default},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("object"===o(FORUM.editor)){var e=document.getElementById("font-area");e&&t.map(function(t){e.insertAdjacentHTML("beforeend",'\n<div style="font-family:'+t+'">\n  <span>'+t+"</span>\n  <img onclick=\"bbcode('[font="+t+"]','[/font]')\" src=\"/i/blank.gif\">\n</div>")})}}},function(t,e,n){var o=n(6).Symbol;t.exports=o},function(t,e,n){var o=n(15),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var o=n(5),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(t){}var r=u.call(t);return o&&(e?t[c]=n:delete t[c]),r}},function(t,e,n){var o=n(5),r=n(10),i=n(9),u="[object Null]",c="[object Undefined]",a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:u:a&&a in Object(t)?r(t):i(t)}},function(t,e,n){var o=n(11),r=n(8),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&o(t)==i}},function(t,e,n){var o=n(7),r=n(12),i=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return i;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=a.test(t);return n||f.test(t)?l(t.slice(2),n?2:8):c.test(t)?i:+t}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(14))},function(t,e,n){var o=n(6);t.exports=function(){return o.Date.now()}},function(t,e,n){var o=n(7),r=n(16),i=n(13),u="Expected a function",c=Math.max,a=Math.min;t.exports=function(t,e,n){var f,l,s,d,p,y,v=0,b=!1,m=!1,g=!0;if("function"!=typeof t)throw new TypeError(u);function h(e){var n=f,o=l;return f=l=void 0,v=e,d=t.apply(o,n)}function S(t){var n=t-y;return void 0===y||n>=e||n<0||m&&t-v>=s}function j(){var t=r();if(S(t))return M(t);p=setTimeout(j,function(t){var n=e-(t-y);return m?a(n,s-(t-v)):n}(t))}function M(t){return p=void 0,g&&f?h(t):(f=l=void 0,d)}function O(){var t=r(),n=S(t);if(f=arguments,l=this,y=t,n){if(void 0===p)return function(t){return v=t,p=setTimeout(j,e),b?h(t):d}(y);if(m)return p=setTimeout(j,e),h(y)}return void 0===p&&(p=setTimeout(j,e)),d}return e=i(e)||0,o(n)&&(b=!!n.leading,s=(m="maxWait"in n)?c(i(n.maxWait)||0,e):s,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==p&&clearTimeout(p),v=0,f=y=l=p=void 0},O.flush=function(){return void 0===p?d:M(r())},O}},function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if("object"===o(FORUM.editor)){var t=function(t){var e=t.length,n=document.querySelector("#charcounter .charcount");n&&(n.innerText=e.toString())},e=document.getElementById("main-reply"),n=document.querySelector("#post p.areafield.required"),r=(0,u.default)(function(e){var n=e.target;return t(n.value)},15);if(e instanceof HTMLTextAreaElement){if(n&&n.insertAdjacentHTML("afterend",'<div id="charcounter">Символов в сообщении: <span class="charcount">0</span></div>'),"object"===o(FORUM.topic)){var i=window.location.search.substr(4),c=localStorage.getItem("topic"+i);null!==c&&void 0!==c&&t(c)}["focus","blur","keypress","keyup","keydown","change","cut","paste","input","selectionchange","propertychange"].forEach(function(t){e.addEventListener(t,r)})}}};var r,i=n(17),u=(r=i)&&r.__esModule?r:{default:r}}]);