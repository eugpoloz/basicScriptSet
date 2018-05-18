// @flow
import { isHelperKey } from "../shared";

// type definitions and global variables
declare var FORUM: Object;
declare var bbcode: Function;

export function addCtrlClicks() {
  function handleClick(e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
      const { parentNode } = e.target;
      if (parentNode instanceof HTMLElement) {
        const { id } = parentNode;
        const nodeID = id.substr(8);

        if (isHelperKey(e)) {
          switch (nodeID) {
            case "image":
              bbcode("[img]", "[/img]");
              break;
            case "link":
              bbcode('[url=""]', "[/url]");
              break;
            default:
              bbcode(`[${nodeID}]`, `[/${nodeID}]`);
              break;
          }
        } else {
          FORUM.get("editor." + nodeID + ".onclick()");
        }
      }
    }
  }

  if (typeof FORUM.editor === "object") {
    const nodeList = document.querySelectorAll(
      "#button-link, #button-hide, #button-image, #button-spoiler, #button-video"
    );

    if (nodeList) {
      nodeList.forEach(node => {
        const img = node.querySelector("img");
        if (img) {
          img.removeAttribute("onclick");
          img.addEventListener("click", handleClick);
        }
      });
    }
  }
}

// сначала оригинал загруженного изображения
// loaded img original first
export function originalUploadedFirst() {
  if (typeof FORUM.editor === "object") {
    const insertFormat = document.getElementById("image-insert-format");

    const html = `<strong>Вставить как:</strong>
    <br><br>
    <select id="selected-insert-format">
      <option value="viewer">Превью</option>
      <option value="source" selected>Оригинал</option>
    </select>`;

    if (insertFormat) {
      return (insertFormat.innerHTML = html);
    }
  }
}
