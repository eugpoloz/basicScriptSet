"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function basicScriptSet(a){var b=a.disabledProfiles,defaultIcon=a.defaultIcon,fastLogin=a.fastLogin;(async function(){if("object"===_typeof(FORUM.editor)){var a=document.getElementById("image-insert-format");if(a)return a.innerHTML="<strong>\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043A:</strong>\n      <br><br>\n      <select id=\"selected-insert-format\">\n        <option value=\"viewer\">\u041F\u0440\u0435\u0432\u044C\u044E</option>\n        <option value=\"source\" selected>\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B</option>\n      </select>"}})(),async function(){function a(a){if(a.target instanceof HTMLElement){var b=a.target.parentNode;if(b instanceof HTMLElement){var c=b.id,d=c.toString().toLowerCase().split("-")[1];a.ctrlKey||a.altKey||a.metaKey?"image"===d?bbcode("[img]","[/img]"):"url"===d?bbcode("[url=\"\"]","[/url]"):bbcode("["+d+"]","[/"+d+"]"):FORUM.get("editor."+d+".onclick()")}}}if("object"===_typeof(FORUM.editor)){var b=document.querySelectorAll("#button-link, #button-hide, #button-image, #button-spoiler, #button-video");b&&b.forEach(function(b){var c=b.querySelector("img");c&&(c.removeAttribute("onclick"),c.addEventListener("click",a))})}}(),async function(a){var b=a.profiles,c=b===void 0?[]:b,d=a.message,e=d===void 0?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0434\u043B\u044F \u0432\u0430\u0441 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E.":d;$().pun_mainReady(function(){var a=document.getElementById("profile");if(a&&0<c.length){a.style.display="none";c.forEach(function(b){if(UserID===b)return a.innerHTML="<p style=\"margin: 1em 0; line-height: 2\">"+e+"</p>"}),a.style.display=""}})}(b),async function(a){var b=a.icon,c=a.after,d=c===void 0?".pa-title":c;b!==void 0&&"object"===_typeof(FORUM.topic)&&document.querySelectorAll(".post-author ul").forEach(function(a){if(!a.querySelector(".pa-avatar")){var c=d&&a.querySelector(d),e=a.querySelector(".pa-author a"),f=e&&e.textContent||"guest";if(c)return c.insertAdjacentHTML("afterend","<li class=\"pa-avatar item2 default-icon\"><img src=\""+b+"\" alt=\""+f+"\" style=\"cursor: pointer;\"></li>")}})}(defaultIcon),async function(a){var b=a.after,c=b===void 0?"navlogin":b,d=a.logins,e=d===void 0?[]:d;if(3===GroupID){var f=async function(a){var b=a.target;if(b instanceof HTMLElement){var c=b.dataset,d=c.login,e=c.password,f=new FormData;f.append("form_sent","1"),f.append("req_username",d),f.append("req_password",e),f.append("login","Submit");var g=await fetch(window.location.origin+"/login.php?action=in",{body:f,credentials:"include",headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","Cache-Control":"max-age=0","Content-Type":"application/x-www-form-urlencoded","Upgrade-Insecure-Requests":"1"},method:"POST"});200===g.status&&window.location.reload()}};if(0<e.length){var g=e.map(function(a,b){var c=a.id,d=a.link,e=a.login,f=a.password;return"<li id=\""+(c||"navAdd"+b)+"\"><a class=\"js_login\" style=\"cursor: pointer;\" data-login=\""+e+"\" data-password=\""+f+"\">"+d+"</a></li>"}),h=document.getElementById(c);h&&h.insertAdjacentHTML("afterend",g.join("")),document.querySelectorAll("a.js_login").forEach(function(a){return a&&a.addEventListener("click",f)})}}}(fastLogin)}