// @flow
declare var FORUM: Object;

function transformNodes() {
  const profileNodes = document.querySelectorAll(".post-author .pa-author");

  if (profileNodes.length > 0) {
    profileNodes.forEach((node) => {
      const link = node.querySelector("a");

      if (!link) {
        const nickname = node.innerText || "";

        if (nickname !== "") {
          const html = `<span class="acchide">Автор:&nbsp;</span><a href="javascript:to('${nickname}')" rel="nofollow">${nickname}</a>`;

          node.innerHTML = html;
        }
      }
    });
  }
}

export default function clickableGuestNames(forum_id?: number): void {
  if (typeof FORUM.topic === "object") {
    const current_forum = Number(FORUM.topic.forum_id);

    if (forum_id) {
      if (current_forum === forum_id) {
        transformNodes();
      }

      return;
    }

    return transformNodes();
  }
}
