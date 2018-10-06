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

type Props = Array<Credit>;

export default function addScriptCredits(props: Props) {
  const about = document.getElementById("pun-about");

  if (about instanceof HTMLElement) {
    const html = `<p class="container"><span id="script-credit-trigger" style="cursor: pointer;">Скрипты форума</span></p>`;
    about.insertAdjacentHTML("beforeend", html);
  }
}
