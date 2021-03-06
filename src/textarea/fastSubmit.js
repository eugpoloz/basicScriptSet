// @flow
import { insertAfter } from "../common";

declare var FORUM: Object;

export default function submitPostOnHotkey() {
  if (typeof FORUM.editor === "object" && typeof FORUM.topic === "object") {
    const textarea = document.querySelector("#main-reply");
    const submitInput = document.querySelector(`input[name="submit"]`);

    if (textarea instanceof HTMLTextAreaElement) {
      function checkWhatsClicked({ key, ctrlKey, metaKey }: KeyboardEvent) {
        if (key === "Enter" && (ctrlKey || metaKey)) {
          submitInput && submitInput.click();
          textarea.value = "";
        }
      }

      textarea.addEventListener("keydown", checkWhatsClicked);
    }

    const previewInput = document.querySelector(`input[name="preview"]`);
    const html = `<div id="fastsubmit">Для быстрой отправки нажмите <strong>Ctrl+Enter</strong> (<strong>Cmd+Enter</strong>).</div>`;

    if (previewInput) {
      insertAfter(`input[name="preview"]`, html);
    } else {
      insertAfter(`input[name="submit"]`, html);
    }
  }
}
