// @flow
import debounce from "lodash/debounce";
declare var FORUM: any;

type Props = {
  counterText?: string
};

export default function charCounter({
  counterText = "Символов в сообщении"
}: Props) {
  const charCounterHTML = `<div id="charcounter">${counterText}: <span class="charcount">0</span></div>`;

  if (typeof FORUM.editor === "object") {
    const textarea = document.getElementById("main-reply");
    const counter = document.querySelector("#charcounter .charcount");
    const counterSibling = document.querySelector("#post p.areafield.required");

    function updateCharCounter({ currentTarget }: Event) {
      if (currentTarget instanceof HTMLTextAreaElement) {
        const { length } = currentTarget.value;

        if (counter) {
          counter.innerText = length.toString();
        }
      }
    }

    if (textarea) {
      if (counterSibling) {
        counterSibling.insertAdjacentHTML("afterend", charCounterHTML);
      }
      textarea.addEventListener(
        "keypress keydown keyup change cut copy paste",
        e => debounce(updateCharCounter(e), 200)
      );
    }
  }
}
