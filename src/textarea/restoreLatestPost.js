// @flow
function getLatestPost(): string {
  let reservedPost: string = "";

  // todo: enhance this w/ topic key getter
  try {
    reservedPost = window.localStorage.getItem("ReservePost");
  } catch (error) {
    console.error("Can't get localStorage.ReservePost", error);
  }

  return reservedPost;
}

function restorePost() {
  const mainReply = document.getElementById("main-reply");

  if (mainReply instanceof HTMLTextAreaElement) {
    mainReply.value = getLatestPost();
  }
}

function addRestorePostButton() {
  const additionArea = document.getElementById("addition-area");

  const restoreBtn = `<div class="js-post-restorer"><span>Восстановить последний пост</span></div>`;

  if (additionArea) {
    additionArea.insertAdjacentHTML("beforeend", restoreBtn);
    const postRestorer = document.querySelector(".js-post-restorer");

    if (postRestorer) {
      postRestorer.addEventListener("click", restorePost);
    }
  }
}

export default function restoreLatestPost() {
  if (document.readyState !== "complete") {
    document.addEventListener("DOMContentLoaded", addRestorePostButton);
  } else {
    addRestorePostButton();
  }
}
