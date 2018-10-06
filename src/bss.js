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

import setDefaultIcon from "./topic/setDefaultIcon";
import createFastLoginLinks from "./various/createFastLoginLinks";
import addFontsToList from "./textarea/addFontsToList";
import charCounter from "./textarea/charCounter";
import selectCodeBox from "./topic/selectAndCopy";
import fastSubmit from "./textarea/fastSubmit";
import {
  addCtrlClicks,
  originalUploadedFirst
} from "./textarea/refactorEditorButtons";
import disableProfiles from "./various/disableProfiles";
import clickableGuestNames from "./topic/clickableGuestNames";

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
  disableProfiles,
  clickableGuestNames
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
