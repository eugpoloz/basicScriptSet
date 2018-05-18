// @flow
import { insertAfter, isHelperKey } from "../shared";

declare var FORUM: Object;

export default function fastSubmit() {
  if (typeof FORUM.editor === "object") {
    const textarea = document.querySelector("#main-reply");
    const submitInput = document.querySelector(`input[name="submit"]`);
    const previewInput = document.querySelector(`input[name="preview"]`);

    if (textarea instanceof HTMLTextAreaElement) {
      function checkWhatsClicked(e: KeyboardEvent) {
        if (e.keyCode === 13 && isHelperKey(e)) {
          submitInput && submitInput.click();
          textarea.value = "";
        }
      }
      textarea.addEventListener("keydown", checkWhatsClicked);
    }

    const html = `<div id="fastsubmit">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>`;

    if (previewInput) {
      insertAfter(`input[name="preview"]`, html);
    } else {
      insertAfter(`input[name="submit"]`, html);
    }
  }
}
