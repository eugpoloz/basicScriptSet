// @flow
"use strict";

/*
  basicScriptSet
  author: eugpoloz (грандоченька смерти)
  license: MIT

  вопросы и поддержка:
  — https://github.com/eugpoloz/basicScriptSet
  — http://urchoice.rolka.su/profile.php?id=4789
*/

import setDefaultIcon from "./customizable/setDefaultIcon";
import createFastLoginLinks from "./customizable/createFastLoginLinks";
import disableProfileEditing from "./customizable/disableProfileEditing";
import addFontsToList from "./modules/addFontsToList";
import charCounter from "./modules/charCounter";
import selectCodeBox from "./modules/selectAndCopy";
import sendOnCtrlEnter from "./modules/sendOnCtrlEnter";

// type definitions and global variables
declare var bbcode: Function;
declare var FORUM: Object;

import type { DefaultIcon, DisabledProfiles, FastLogin } from "./commonTypes";

type Options = {
  disabledProfiles: DisabledProfiles,
  defaultIcon: DefaultIcon,
  fastLogin: FastLogin
};

// basic function
export function bss({ disabledProfiles, defaultIcon, fastLogin }: Options) {
  // сначала оригинал загруженного изображения
  // loaded img original first
  (function originalUploadedFirst() {
    if (typeof FORUM.editor === "object") {
      const insertFormat = document.getElementById("image-insert-format");

      const html = `<strong>Вставить как:</strong>
      <br><br>
      <select id="selected-insert-format">
        <option value="viewer">Превью</option>
        <option value="source" selected>Оригинал</option>
      </select>`;

      if (insertFormat) {
        return (insertFormat.innerHTML = html);
      }
    }
  })();

  (function addCtrlClicks() {
    type BBClickEvent = {
      target: EventTarget,
      ctrlKey: boolean,
      altKey: boolean,
      metaKey: boolean
    };

    function handleClick(e: BBClickEvent) {
      if (e.target instanceof HTMLElement) {
        const { parentNode } = e.target;
        if (parentNode instanceof HTMLElement) {
          const { id } = parentNode;
          const nodeID = id
            .toString()
            .toLowerCase()
            .split("-")[1];

          if (e.ctrlKey || e.altKey || e.metaKey) {
            switch (nodeID) {
              case "image":
                bbcode("[img]", "[/img]");
                break;
              case "url":
                bbcode('[url=""]', "[/url]");
                break;
              default:
                bbcode(`[${nodeID}]`, `[/${nodeID}]`);
                break;
            }
          } else {
            FORUM.get("editor." + nodeID + ".onclick()");
          }
        }
      }
    }

    if (typeof FORUM.editor === "object") {
      const nodeList = document.querySelectorAll(
        "#button-link, #button-hide, #button-image, #button-spoiler, #button-video"
      );

      if (nodeList) {
        nodeList.forEach(node => {
          const img = node.querySelector("img");
          if (img) {
            img.removeAttribute("onclick");
            img.addEventListener("click", handleClick);
          }
        });
      }
    }
  })();

  // (function countMainTextareaSymbols() {
  //   const charCounterHTML = `<div id="charcounter">Символов в сообщении: <span class="charcount">0</span></div>`;
  //   if (typeof FORUM.editor === "object") {
  //   }
  // })();

  // calling functions w/ passed props
  disableProfileEditing(disabledProfiles);
  setDefaultIcon(defaultIcon);
  createFastLoginLinks(fastLogin);
}

export { addFontsToList, charCounter, selectCodeBox, sendOnCtrlEnter };

// possible config for reference:
// basicScriptSet({
//   disabledProfiles: {
//     profiles: [4]
//   }, // айди профилей в квадратных скобках через запятую
//   defaultIcon: {
//     icon: "http://forumavatars.ru/img/avatars/0019/83/8b/85-1520334341.png" // ссылка
//   },
//   fastLogin: {
//     logins: [
//       {
//         login: "reader test",
//         password: "12345",
//         id: "navreader",
//         link: "Peek Inside"
//       }
//     ]
//   }
// });
