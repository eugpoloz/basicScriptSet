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

import addFontsToList from "./textarea/addFontsToList";
import charCounter from "./textarea/charCounter";
import fastSubmit from "./textarea/fastSubmit";
import {
  addCtrlClicks,
  originalUploadedFirst
} from "./textarea/refactorEditorButtons";

import setDefaultIcon from "./topic/setDefaultIcon";
import selectCodeBox from "./topic/selectAndCopy";
import clickableGuestNames from "./topic/clickableGuestNames";

import createFastLoginLinks from "./various/createFastLoginLinks";
import disableProfiles from "./various/disableProfiles";

// basic function
export function enhanceTextarea() {
  addCtrlClicks();
  originalUploadedFirst();
}

// module exports
export {
  setDefaultIcon,
  createFastLoginLinks,
  addFontsToList,
  charCounter,
  selectCodeBox,
  fastSubmit,
  disableProfiles,
  clickableGuestNames
};

// possible config for reference:

// basicScriptSet.enhanceTextarea();
// basicScriptSet.setDefaultIcon("http://forumavatars.ru/img/avatars/0019/83/8b/85-1520334341.png" /* ссылка */ );
// basicScriptSet.disableProfiles({
//   profiles: [4],
//   message: "Don't even think about it!"
// });
