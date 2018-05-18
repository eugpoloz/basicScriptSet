// @flow
declare var FORUM: Object;

export default function sendOnCtrlEnter() {
  if (typeof FORUM.editor === "object") {
    const textarea = document.querySelector("#main-reply");

    if (textarea instanceof HTMLTextAreaElement) {
      function checkWhatsClicked({ keyCode, ctrlKey }: KeyboardEvent) {
        if (keyCode === 13 && ctrlKey) {
          const submitInput = document.querySelector(
            `#post input[name="submit"]`
          );
          submitInput && submitInput.click();
          textarea.value = "";
        }
      }
      textarea.addEventListener("keydown", checkWhatsClicked);
    }

    const formsubmit = document.querySelector("#post p.formsubmit");
    const html = `<div class="fast-submit">Для быстрой отправки нажмите <strong>Ctrl+Enter<strong> (<strong>Cmd+Enter</strong> для MacOS).</div>`;

    if (formsubmit) {
      formsubmit.insertAdjacentHTML("beforeend", html);
    }
  }
}
