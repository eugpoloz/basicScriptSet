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
import addFontsToList from "./modules/addFontsToList";
import charCounter from "./modules/charCounter";
import selectCodeBox from "./modules/selectAndCopy";
import fastSubmit from "./modules/fastSubmit";
import {
  addCtrlClicks,
  originalUploadedFirst
} from "./modules/refactorEditorButtons";
import disableProfiles from "./modules/disableProfiles";

import type { DefaultIcon, FastLogin } from "./commonTypes";

type Options = {
  defaultIcon: DefaultIcon,
  fastLogin: FastLogin
};

// basic function
export function bss({ defaultIcon, fastLogin }: Options) {
  addCtrlClicks();
  originalUploadedFirst();

  // calling functions w/ passed props
  if (defaultIcon) setDefaultIcon(defaultIcon);
  if (fastLogin) createFastLoginLinks(fastLogin);
}

export {
  addFontsToList,
  charCounter,
  selectCodeBox,
  fastSubmit,
  disableProfiles
};

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
