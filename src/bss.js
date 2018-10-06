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

import additionalFonts from "./textarea/addFontsToList";
import charCounter from "./textarea/charCounter";
import fastSubmit from "./textarea/fastSubmit";
import {
  addCtrlClicks,
  originalUploadedFirst
} from "./textarea/refactorEditorButtons";

import defaultIcon from "./topic/setDefaultIcon";
import selectableCodeBox from "./topic/selectAndCopy";
import clickableGuestNames from "./topic/makeGuestNamesClickable";

import fastLoginLinks from "./various/createFastLoginLinks";
import disabledProfiles from "./various/disableProfiles";

// basic function
export function enhanceTextarea() {
  addCtrlClicks();
  originalUploadedFirst();
}

// module exports
export {
  defaultIcon,
  fastLoginLinks,
  additionalFonts,
  charCounter,
  selectableCodeBox,
  fastSubmit,
  disabledProfiles,
  clickableGuestNames
};

// possible config for reference:

// basicScriptSet.enhanceTextarea();
// basicScriptSet.setDefaultIcon("http://forumavatars.ru/img/avatars/0019/83/8b/85-1520334341.png" /* ссылка */ );
// basicScriptSet.disableProfiles({
//   profiles: [4],
//   message: "Don't even think about it!"
// });
