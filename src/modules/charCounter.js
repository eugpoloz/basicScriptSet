// @flow
import debounce from "lodash/debounce";
declare var FORUM: any;

// type Props = {
//   counterText?: string
// };

export default function charCounter() {
  const charCounterHTML = `<div id="charcounter">Символов в сообщении: <span class="charcount">0</span></div>`;

  if (typeof FORUM.editor === "object") {
    const textarea = document.getElementById("main-reply");
    const counterSibling = document.querySelector("#post p.areafield.required");

    function updateCharCounter({ target }: Event) {
      if (target instanceof HTMLTextAreaElement) {
        const { length } = target.value;

        const counter = document.querySelector("#charcounter .charcount");
        if (counter) {
          counter.innerText = length.toString();
        }
      }
    }

    const debouncedUpdate = debounce(e => updateCharCounter(e), 75);

    if (textarea) {
      if (counterSibling) {
        counterSibling.insertAdjacentHTML("afterend", charCounterHTML);
      }
      [
        "focus",
        "blur",
        "keypress",
        "keyup",
        "keydown",
        "change",
        "cut",
        "paste",
        "input",
        "selectionchange",
        "propertychange"
      ].forEach(event => {
        textarea.addEventListener(event, debouncedUpdate);
      });
    }
  }
}
