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

    function updateCharCounter(value: string) {
      const { length } = value;

      const counter = document.querySelector("#charcounter .charcount");
      if (counter) {
        counter.innerText = length.toString();
      }
    }

    const debouncedUpdate = debounce(
      ({ target }) => updateCharCounter(target.value),
      15
    );

    if (textarea instanceof HTMLTextAreaElement) {
      if (typeof FORUM.topic === "object") {
        const id = window.location.search.substr(1).split("=")[1];
        const savedPost = localStorage.getItem(`topic${id}`);

        savedPost && updateCharCounter(savedPost);
      }
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
