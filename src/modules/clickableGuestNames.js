// @flow
declare var FORUM: Object;

export default function clickableGuestNames() {
  if (typeof FORUM.topic === "object") {
    const profileNodes = document.querySelectorAll(".post-author .pa-author");

    if (profileNodes.length > 0) {
      profileNodes.forEach(node => {
        const link = node.querySelector("a");
        if (!link) {
          const nickname = node.innerText || "";
          if (nickname !== "") {
            const html = `<li class="pa-author"><span class="acchide">Автор:&nbsp;</span><a href="javascript:to('${nickname}')" rel="nofollow">${nickname}</a></li>`;

            node.innerHTML = html;
          }
        }
      });
    }
  }
}
