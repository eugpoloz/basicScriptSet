"use strict";async function appendSmilies(a){function b(){d instanceof HTMLElement&&d.querySelectorAll("a").forEach(function(a){return a.classList.remove("smilies-button--active")})}function c(a,c){a.preventDefault();var e=a.currentTarget;e instanceof HTMLAnchorElement&&(b(),e.classList.add("smilies-button--active"),d instanceof HTMLElement&&(d.innerHTML=c,f instanceof HTMLElement&&(f.style.display="block")))}var d=document.getElementById("smile-btns"),f=document.getElementById("smile-packs"),e=document.getElementById("smile-container"),g=document.getElementById("smile-container-close");a.forEach(function(a){var b=a.smilies,e=a.button_text,f=document.createElement("a");f.className="smile_custom_btn",f.innerText=e;var g=b.map(function(a,b){return"<a onclick=\"insert('[img]' + "+a+" +'[/img]')\"><img src=\""+a+"\" alt=\""+e+b.toString(10)+"\"/></a>"}).join(" ");console.log(g),f.addEventListener("click",function(a){return c(a,g)}),d instanceof HTMLElement&&d.insertBefore(f,null)}),g instanceof HTMLAnchorElement&&g.addEventListener("click",function(a){a.preventDefault(),b(),f instanceof HTMLElement&&(f.style.display="none")})}appendSmilies([{smilies:["http://s2.uploads.ru/xYUaQ.gif","http://funkyimg.com/i/21Qek.gif","http://funkyimg.com/i/21Qeo.gif","http://s5.uploads.ru/LiURd.gif","http://s3.uploads.ru/XriNH.gif","http://funkyimg.com/i/21JPX.gif","http://funkyimg.com/i/21JY6.gif","http://funkyimg.com/i/21Wcf.gif","http://s1.uploads.ru/i/dskb4.gif","http://s2.uploads.ru/YW2XL.gif","http://f6.s.qip.ru/UdTRA7hc.gif","http://funkyimg.com/i/21UPB.gif","http://funkyimg.com/i/21UPC.gif","http://funkyimg.com/i/22G1h.gif","http://funkyimg.com/i/22G1G.gif","http://sh.uploads.ru/G2Zgt.gif","http://s2.uploads.ru/MmSWc.gif","http://s2.uploads.ru/m5B3R.gif","http://s5.uploads.ru/StdHU.gif","http://s4.uploads.ru/t/8EBcZ.gif","http://f6.s.qip.ru/hBxMrtm.gif","http://f6.s.qip.ru/UdTRA7ic.gif","http://f6.s.qip.ru/RnQpPjx0.gif","http://s4.uploads.ru/k9vzZ.gif","http://sh.uploads.ru/gSpMm.gif","http://s5.uploads.ru/t/cLspr.gif","http://f6.s.qip.ru/UdTRA7hu.gif","http://s2.uploads.ru/xNbpK.gif","http://s7.uploads.ru/mGULe.gif","http://sh.uploads.ru/rYfaU.gif","http://s5.uploads.ru/JgPrK.gif","http://s4.uploads.ru/BslHI.gif","http://funkyimg.com/i/21Qfa.gif","http://funkyimg.com/i/21Qfe.gif","http://funkyimg.com/i/22FZd.gif","http://funkyimg.com/i/22FZc.gif","http://s2.uploads.ru/zA2Ps.gif","http://funkyimg.com/i/22FZT.gif","http://funkyimg.com/i/21Qfm.gif","http://funkyimg.com/i/21Qfk.gif","http://sh.uploads.ru/ozYQG.gif","http://sg.uploads.ru/tpnPL.gif","http://funkyimg.com/i/21WcE.gif","http://funkyimg.com/i/21WcL.gif","http://funkyimg.com/i/22G1j.gif","http://funkyimg.com/i/21Qfz.gif","http://sg.uploads.ru/vgUEm.gif","http://s3.uploads.ru/Rq2KN.gif","http://s2.uploads.ru/CEQSw.gif","http://funkyimg.com/i/Nhoo.gif","http://f6.s.qip.ru/UdTRA7k2.gif","http://pix.academ.org/img/2012/10/11/fe9f25e42a03052ce3786644cbd2c1c2.gif","http://sh.uploads.ru/l3O1d.gif","http://s1.uploads.ru/t/dU7eG.gif","http://s1.uploads.ru/i/6yOkz.gif","http://sg.uploads.ru/S9GsI.gif"],button_text:"\u0413\u0438\u0444\u043A\u043E\u0441\u043C\u0430\u0439\u043B\u044B"}]);