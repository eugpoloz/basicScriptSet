function restorePost() {
  const mainReply = document.getElementById("main-reply");

  if (mainReply instanceof HTMLTextAreaElement) {
    mainReply.value = localStorage.ReservePost;
  }
}

function addRestorePostButton() {
  const additionArea = document.getElementById("addition-area");

  const restoreBtn = `<div id="reservedPostRestorer" role="button"><span>Восстановить последний пост</span></div>`;

  if (additionArea) {
    additionArea.insertAdjacentHTML("beforeend", restoreBtn);
    const postRestorer = document.getElementById("reservedPostRestorer");

    reservedPostRestorer.addEventListener("click", restorePost);
  }
}

export default function restoreLatestPost() {
  if (document.readyState !== "complete") {
    document.addEventListener("DOMContentLoaded", addRestorePostButton);
  } else {
    addRestorePostButton();
  }
}
