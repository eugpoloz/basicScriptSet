// @flow
"use strict";

// type definitions and global variables
declare var GroupID: any;

// type defs
type Pack = {
  smilies: Array<string>,
  button_text: string
};

type AppendSmilies = Array<Pack>;

// our func
async function appendSmilies(smiliesPacks: AppendSmilies) {
  if (GroupID !== 3) {
    const buttonsContainer = document.getElementById("smile-btns");
    const packsContainer = document.getElementById("smile-packs");
    const smiliesContainer = document.getElementById("smile-container");
    const closeContainerBtn = document.getElementById("smile-container-close");

    const activeClass = "smile-custom-btn--active";

    function resetActiveClass() {
      if (buttonsContainer instanceof HTMLElement) {
        buttonsContainer
          .querySelectorAll("a")
          .forEach(btn => btn.classList.remove(activeClass));
      }
    }

    function handleButtonClick(e: MouseEvent, smiliesHTML: string) {
      e.preventDefault();
      const { currentTarget } = e;
      if (currentTarget instanceof HTMLAnchorElement) {
        resetActiveClass();
        currentTarget.classList.add(activeClass);

        if (
          smiliesContainer instanceof HTMLElement &&
          packsContainer instanceof HTMLElement
        ) {
          smiliesContainer.innerHTML = smiliesHTML;
          packsContainer.style.display = "";
        }
      }
    }

    smiliesPacks.forEach(({ smilies, button_text }: Pack) => {
      // construct our button
      const buttonEl = document.createElement("a");
      buttonEl.className = "smile-custom-btn";
      buttonEl.Text.data = button_text;

      const smiliesHTML = smilies
        .map(
          (smile: string, idx: number) =>
            `<a onclick="insert(' [img]${smile}[/img] ')"><img src="${smile}" alt="${button_text}${idx.toString(
              10
            )}"/></a>`
        )
        .join(" ");

      // bind event listener
      buttonEl.addEventListener("click", (e: MouseEvent) =>
        handleButtonClick(e, smiliesHTML)
      );

      // add it if we have a container for it, add it
      if (buttonsContainer instanceof HTMLElement) {
        buttonsContainer.appendChild(buttonEl);
      }
    });

    if (closeContainerBtn instanceof HTMLAnchorElement) {
      closeContainerBtn.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
        resetActiveClass();
        if (
          smiliesContainer instanceof HTMLElement &&
          packsContainer instanceof HTMLElement
        ) {
          smiliesContainer.innerHTML = "";
          packsContainer.style.display = "none";
        }
      });
    }
  }
}

// configuration example:
// appendSmilies([
//   {
//     smilies: [
//       "http://s2.uploads.ru/xYUaQ.gif",
//       "http://funkyimg.com/i/21Qek.gif",
//       "http://funkyimg.com/i/21Qeo.gif",
//       "http://s5.uploads.ru/LiURd.gif",
//       "http://s3.uploads.ru/XriNH.gif",
//       "http://funkyimg.com/i/21JPX.gif"
//     ],
//     button_text: "Гифкосмайлы"
//   }
// ]);
