// @flow
import debounce from "lodash/debounce";
import { insertAfter } from "../common";

declare var FORUM: Object;

export default function countCharacters(counterText?: string = "Символов в сообщении") {
  const html = `<div id="charcounter">${counterText}: <span class="charcount">0</span></div>`;

  if (typeof FORUM.editor === "object") {
    const textarea = document.getElementById("main-reply");

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
      insertAfter("p.areafield.required", html);

      if (typeof FORUM.topic === "object") {
        const id = window.location.search.substr(4);
        const savedPost = localStorage.getItem(`topic${id}`);

        if (savedPost !== null && savedPost !== undefined) {
          updateCharCounter(savedPost);
        }
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
