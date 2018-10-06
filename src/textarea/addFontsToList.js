// @flow
declare var FORUM: Object;

export default function addFontsToList(fonts: Array<string>) {
  if (typeof FORUM.editor === "object") {
    const fontArea = document.getElementById("font-area");
    if (fontArea) {
      fonts.map(font => {
        const html = `<div style="font-family:${font}"><span>${font}</span> <img onclick="bbcode('[font=${font}]','[/font]')" src="/i/blank.gif"> </div>`;

        fontArea.insertAdjacentHTML("beforeend", html);
      });
    }
  }
}
