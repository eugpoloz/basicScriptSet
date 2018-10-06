// @flow
declare var FORUM: Object;

const fontHMTL = (font: string) =>
  `<div style="font-family:${font}">
    <span>${font}</span> <img onclick="bbcode('[font=${font}]','[/font]')" src="/i/blank.gif">
  </div>`;

export default function addFontsToList(fonts: Array<string>) {
  if (typeof FORUM.editor === "object") {
    const fontArea = document.getElementById("font-area");

    if (fontArea instanceof HTMLElement) {
      const html = fonts.map(fontHMTL).join("");

      fontArea.insertAdjacentHTML("beforeend", html);
      return;
    }
  }
}
