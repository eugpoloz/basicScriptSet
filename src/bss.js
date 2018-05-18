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
import fastSubmit from "./modules/fastSubmit";
import {
  addCtrlClicks,
  originalUploadedFirst
} from "./modules/refactorEditorButtons";

import type { DefaultIcon, DisabledProfiles, FastLogin } from "./commonTypes";

type Options = {
  disabledProfiles: DisabledProfiles,
  defaultIcon: DefaultIcon,
  fastLogin: FastLogin
};

// basic function
export function bss({ disabledProfiles, defaultIcon, fastLogin }: Options) {
  addCtrlClicks();
  originalUploadedFirst();

  // calling functions w/ passed props
  disableProfileEditing(disabledProfiles);
  setDefaultIcon(defaultIcon);
  createFastLoginLinks(fastLogin);
}

export { addFontsToList, charCounter, selectCodeBox, fastSubmit };

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
