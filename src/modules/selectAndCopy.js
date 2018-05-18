// @flow
declare var FORUM: Object;

// taken from this tutorial
// http://www.javascriptkit.com/javatutors/copytoclipboard.shtml
function selectElementText(el) {
  const range = document.createRange(); // create new range object
  range.selectNodeContents(el); // set range to encompass desired element text
  const selection = window.getSelection(); // get Selection object from currently user selected text
  selection.removeAllRanges(); // unselect any user selected text (if any)
  selection.addRange(range); // add range to Selection object to select it
}

function copySelectionText() {
  let copysuccess; // var to check whether execCommand successfully executed
  try {
    copysuccess = document.execCommand("copy"); // run command to copy selected text to clipboard
  } catch (e) {
    copysuccess = false;
  }
  return copysuccess;
}

// our custom code
type CodeBoxProps = {
  text?: string
};

export default function selectCodeBoxContents(props: CodeBoxProps) {
  if (typeof FORUM.topic === "object" || typeof FORUM.editor === "object") {
    const codeboxNodeList = document.querySelectorAll(".code-box");

    function codeSelector(e: Event) {
      e.preventDefault();
      const { target } = e;

      if (target instanceof HTMLElement) {
        const nearestParent = target.closest(".code-box");

        const elToSelect =
          target.tagName === "pre"
            ? target
            : nearestParent && nearestParent.querySelector("pre");

        if (elToSelect instanceof HTMLPreElement) {
          selectElementText(elToSelect);
          const copysuccess = copySelectionText();
          console.log(copysuccess);
        }
      }
    }

    if (codeboxNodeList.length > 0) {
      const { text = "Выделить код:" } = props;

      codeboxNodeList.forEach(node => {
        const legend = node.querySelector(".legend");
        if (legend) {
          legend.innerHTML = `<a href="#">${text}</a>`;
        }
        node.addEventListener("click", codeSelector);
      });
    }
  }
}

//   motivatebox.addEventListener(
//     "mouseup",
//     function(e) {
//       var e = e || event; // equalize event object between modern and older IE browsers
//       var target = e.target || e.srcElement; // get target element mouse is over
//       if (target.className == "motivate") {
//         selectElementText(target); // select the element's text we wish to read
//         var copysuccess = copySelectionText();
//         if (copysuccess) {
//           showtooltip(e);
//         }
//       }
//     },
//     false
//   );
// }
