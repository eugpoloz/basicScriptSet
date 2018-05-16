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

    function updateCharCounter({ currentTarget }: Event) {
      console.log("ran");
      if (currentTarget instanceof HTMLTextAreaElement) {
        const { length } = currentTarget.value;

        console.log(length);

        const counter = document.querySelector("#charcounter .charcount");
        if (counter) {
          counter.innerText = length.toString();
        }
      }
    }

    const debouncedUpdate = debounce(e => updateCharCounter(e), 200);

    if (textarea) {
      if (counterSibling) {
        counterSibling.insertAdjacentHTML("afterend", charCounterHTML);
      }
      textarea.addEventListener(
        "keypress keydown keyup change cut copy paste",
        debouncedUpdate
      );
    }
  }
}
