// @flow
declare var $: {
  jGrowl: Function
};

type Credit = {
  name: string, // script name
  author: string, // author name
  url: string, // link to script page
  contacts?: Array<{
    url: string, // link
    title?: string // link title
  }>
};

type Props = {
  text?: string,
  credits: Array<Credit>
};

export default function addScriptCredits({
  text = "Скрипты форума",
  credits
}: Props) {

  const about = document.getElementById("pun-about");

  if (about instanceof HTMLElement) {
    const container = about.querySelector("p.container");
    const triggerHTML = `<a href="#" id="script-credit-trigger">${text}</a>`;

    if (container instanceof HTMLElement) {
      container.insertAdjacentHTML(
        "beforebegin",
        `<span>${triggerHTML} | </span>`
      );
    } else {
      about.insertAdjacentHTML(
        "beforeend",
        `<p class="container"><span>${triggerHTML}</span></p>`
      );
    }
  }
}
