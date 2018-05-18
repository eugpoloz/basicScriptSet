// @flow
import { insertAfterAreafield, isHelperKey } from "../shared";

declare var FORUM: Object;

export default function sendOnCtrlEnter() {
  if (typeof FORUM.editor === "object") {
    const textarea = document.querySelector("#main-reply");
    const submitInput = document.querySelector(`input[name="submit"]`);

    if (textarea instanceof HTMLTextAreaElement) {
      function checkWhatsClicked(e: KeyboardEvent) {
        if (e.keyCode === 13 && isHelperKey(e)) {
          submitInput && submitInput.click();
          textarea.value = "";
        }
      }
      textarea.addEventListener("keydown", checkWhatsClicked);
    }

    const html = `<div class="fastsubmit--text" style="margin-left: 1rem; margin-right: auto;">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>`;

    insertAfterAreafield(html);
  }
}
