// @flow
"use strict";

// type defs
type Pack = {
  smilies: Array<string>,
  button_text: string
};

type AppendSmilies = Array<Pack>;

// our func
async function appendSmilies(smiliesPacks: AppendSmilies) {
  const buttonsContainer = document.getElementById("smile-btns");
  const packsContainer = document.getElementById("smile-packs");
  const smiliesContainer = document.getElementById("smile-container");
  const closeContainerBtn = document.getElementById("smile-container-close");

  const activeClass = "smilies-button--active";

  function resetActiveClass() {
    if (buttonsContainer instanceof HTMLElement) {
      buttonsContainer
        .querySelectorAll("a")
        .forEach(btn => btn.classList.remove(activeClass));
    }
  }

  function handleButtonClick(e: MouseEvent, smiliesMap: Array<string>) {
    e.preventDefault();
    const { currentTarget } = e;
    if (currentTarget instanceof HTMLAnchorElement) {
      resetActiveClass();
      currentTarget.classList.add(activeClass);

      if (buttonsContainer instanceof HTMLElement) {
        buttonsContainer.innerHTML = smiliesMap.join(" ");

        if (packsContainer instanceof HTMLElement) {
          packsContainer.style.display = "block";
        }
      }
    }
  }

  function handleCloseClick(e: MouseEvent) {
    e.preventDefault();
    resetActiveClass();
    if (packsContainer instanceof HTMLElement) {
      packsContainer.style.display = "none";
    }
  }

  smiliesPacks.forEach(({ smilies, button_text }: Pack) => {
    // construct our button
    const buttonEl = document.createElement("a");
    buttonEl.className = "smile_custom_btn";
    buttonEl.innerText = button_text;

    const smiliesMap = smilies.map(
      (smile: string, idx: number) =>
        `<a onclick="insert('[img]' + ${smile} +'[/img]')">
          <img src="${smile}" alt="${button_text}${idx.toString(10)}"/>
        </a>`
    );

    console.log(smiliesMap);

    // bind event listener
    buttonEl.addEventListener("click", (e: MouseEvent) =>
      handleButtonClick(e, smiliesMap)
    );

    // add it if we have a container for it, add it
    if (buttonsContainer instanceof HTMLElement) {
      buttonsContainer.insertBefore(buttonEl, null);
    }
  });

  if (closeContainerBtn instanceof HTMLAnchorElement) {
    closeContainerBtn.addEventListener("click", handleCloseClick);
  }
}

// configuration example:
appendSmilies([
  {
    smilies: [
      "http://s2.uploads.ru/xYUaQ.gif",
      "http://funkyimg.com/i/21Qek.gif",
      "http://funkyimg.com/i/21Qeo.gif",
      "http://s5.uploads.ru/LiURd.gif",
      "http://s3.uploads.ru/XriNH.gif",
      "http://funkyimg.com/i/21JPX.gif",
      "http://funkyimg.com/i/21JY6.gif",
      "http://funkyimg.com/i/21Wcf.gif",
      "http://s1.uploads.ru/i/dskb4.gif",
      "http://s2.uploads.ru/YW2XL.gif",
      "http://f6.s.qip.ru/UdTRA7hc.gif",
      "http://funkyimg.com/i/21UPB.gif",
      "http://funkyimg.com/i/21UPC.gif",
      "http://funkyimg.com/i/22G1h.gif",
      "http://funkyimg.com/i/22G1G.gif",
      "http://sh.uploads.ru/G2Zgt.gif",
      "http://s2.uploads.ru/MmSWc.gif",
      "http://s2.uploads.ru/m5B3R.gif",
      "http://s5.uploads.ru/StdHU.gif",
      "http://s4.uploads.ru/t/8EBcZ.gif",
      "http://f6.s.qip.ru/hBxMrtm.gif",
      "http://f6.s.qip.ru/UdTRA7ic.gif",
      "http://f6.s.qip.ru/RnQpPjx0.gif",
      "http://s4.uploads.ru/k9vzZ.gif",
      "http://sh.uploads.ru/gSpMm.gif",
      "http://s5.uploads.ru/t/cLspr.gif",
      "http://f6.s.qip.ru/UdTRA7hu.gif",
      "http://s2.uploads.ru/xNbpK.gif",
      "http://s7.uploads.ru/mGULe.gif",
      "http://sh.uploads.ru/rYfaU.gif",
      "http://s5.uploads.ru/JgPrK.gif",
      "http://s4.uploads.ru/BslHI.gif",
      "http://funkyimg.com/i/21Qfa.gif",
      " http://funkyimg.com/i/21Qfe.gif",
      " http://funkyimg.com/i/22FZd.gif",
      " http://funkyimg.com/i/22FZc.gif",
      " http://s2.uploads.ru/zA2Ps.gif",
      "http://funkyimg.com/i/22FZT.gif",
      " http://funkyimg.com/i/21Qfm.gif",
      "http://funkyimg.com/i/21Qfk.gif",
      "http://sh.uploads.ru/ozYQG.gif",
      "http://sg.uploads.ru/tpnPL.gif",
      "http://funkyimg.com/i/21WcE.gif",
      "http://funkyimg.com/i/21WcL.gif",
      "http://funkyimg.com/i/22G1j.gif",
      "http://funkyimg.com/i/21Qfz.gif",
      "http://sg.uploads.ru/vgUEm.gif",
      "http://s3.uploads.ru/Rq2KN.gif",
      "http://s2.uploads.ru/CEQSw.gif",
      "http://funkyimg.com/i/Nhoo.gif",
      "http://f6.s.qip.ru/UdTRA7k2.gif",
      "http://pix.academ.org/img/2012/10/11/fe9f25e42a03052ce3786644cbd2c1c2.gif",
      "http://sh.uploads.ru/l3O1d.gif",
      "http://s1.uploads.ru/t/dU7eG.gif",
      "http://s1.uploads.ru/i/6yOkz.gif",
      "http://sg.uploads.ru/S9GsI.gif"
    ],
    button_text: "Гифкосмайлы"
  }
]);
