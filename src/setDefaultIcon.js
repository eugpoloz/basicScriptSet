// @flow
declare var FORUM: any;

import type { DefaultIcon } from "./bss";

// various helper functions
export function setDefaultIcon(defaultIcon: DefaultIcon = null) {
  if (defaultIcon === null) {
    return;
  }

  // мы предполагаем, что если не передается вообще никаких параметров,
  // то вставлять аватарку надо всегда ПОСЛЕ статуса .pa-title
  const { icon = "", after = ".pa-title", before = null } = defaultIcon;

  // если нет урла, то все понятно
  if (icon === "") {
    return;
  }

  // если есть урл, см. строку 136 и комментарий
  if (typeof FORUM.topic === "object") {
    document.querySelectorAll(".post-author ul").forEach(author => {
      if (author.querySelector(".pa-avatar")) return;
      const authorLink = author.querySelector(".pa-author a");
      const alt = (authorLink && authorLink.textContent) || "guest";
      const html = `<li class="pa-avatar item2 default-icon"><img src="${icon}" alt="${alt}" style="cursor: pointer;"></li>`;

      // сначала мы чекаем, есть ли у нас before, и отдаем его
      if (before) {
        const beforeEl = author.querySelector(before);
        return beforeEl && beforeEl.insertAdjacentHTML("beforebegin", html);
      }

      // потом мы чекаем, есть ли у нас after;
      // если и его нет, то подставится наш дефолтный ПОСЛЕ .pa-title
      if (after) {
        const afterEl = author.querySelector(after);
        return afterEl && afterEl.insertAdjacentHTML("afterend", html);
      }
    });
  }
}

export default setDefaultIcon;
