// @flow
declare var FORUM: Object;

// taken from this tutorial
// http://www.javascriptkit.com/javatutors/copytoclipboard.shtml
function selectElementText(el) {
  // let's combine with previous code and augment
  let range = document.createRange();
  range.selectNodeContents(el);
  let selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function copySelectionText() {
  let copysuccess;
  try {
    copysuccess = document.execCommand("copy"); // run command to copy selected text to clipboard
  } catch (e) {
    copysuccess = false;
  }
  return copysuccess;
}

// OUR CODE
// helper func
function changeText(el?: HTMLElement, innerHTML: string) {
  if (el) {
    el.innerHTML = innerHTML;
  }
}

// our custom code
type CodeBoxProps = {
  text?: string,
  copiedText?: string
};

export default function selectCodeBoxContents(props: CodeBoxProps) {
  // if (typeof FORUM.topic === "object" || typeof FORUM.editor === "object") {
  const codeboxNodeList = document.querySelectorAll(".code-box");

  const text = props && props.text ? props.text : "Выделить и скопировать:";
  const textHTML = `<a href="#">${text}</a>`;
  const copiedText =
    props && props.copiedText
      ? props.copiedText
      : "Скопировано в буфер обмена!";

  function codeSelector({ target }: Event) {
    if (
      target instanceof HTMLElement &&
      (target.tagName === "PRE" || target.tagName === "A")
    ) {
      const nearestParent = target.closest(".code-box");

      const elToSelect =
        target.tagName === "PRE"
          ? target
          : nearestParent && nearestParent.querySelector("pre");
      const elLegend = nearestParent && nearestParent.querySelector(".legend");

      if (elToSelect instanceof HTMLPreElement) {
        selectElementText(elToSelect);
        const copysuccess = copySelectionText();
        if (copysuccess === true) {
          // let's show user that our stuff is copied to clipboard
          if (elLegend) {
            changeText(elLegend, copiedText);
            let timer;

            function revertTextBack() {
              window.clearTimeout(timer);
              timer = window.setTimeout(
                () => changeText(elLegend, textHTML),
                // in ms
                3000
              );
            }

            revertTextBack();
          }
        }
      }
    }
  }

  if (codeboxNodeList.length > 0) {
    codeboxNodeList.forEach(node => {
      node.addEventListener("click", (e: Event) => {
        e.preventDefault();
        console.log(e.target);

        const legend = node.querySelector(".legend");
        if (legend) {
          changeText(legend, textHTML);
        }
        codeSelector(e);
      });
    });
  }
  // }
}

// previous script for reference
// $(function() {
//    /* ВЫДЕЛЕНИЕ КОДА ПО КЛИКУ, с сайта max22.ru */
//    $('.code-box').find('pre').click(function() {
//       var rng, sel;
//       if (document.createRange) {
//          rng = document.createRange();
//          rng.selectNode(this);
//          sel = window.getSelection();
//          var strSel = '' + sel;
//          if (!strSel.length) {
//             sel.removeAllRanges();
//             sel.addRange(rng);
//          }
//       } else {
//          var rng = document.body.createTextRange();
//          rng.moveToElementText(this);
//          rng.select();
//       }
//    });
//    $('.code-box').find('.legend').html('Кликните по коду ниже, чтобы его выделить:');
// }); /* Конец скрипта */
