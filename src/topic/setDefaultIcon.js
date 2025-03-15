function createDefaultIcon(props) {
  // мы предполагаем, что если не передается вообще никаких параметров,
  // то вставлять аватарку надо всегда ПОСЛЕ статуса .pa-title
  const { icon, before = null, after } = props;

  if (typeof FORUM.topic === "object") {
    document.querySelectorAll(".post-author.no-avatar").forEach((author) => {
      const authorLink = author.querySelector(".pa-author a");
      const alt = authorLink?.textContent ?? "guest";
      const html = `<li class="pa-avatar item2 default-icon"><img src="${icon}" alt="${alt}" style="cursor: pointer;"></li>`;

      // сначала мы чекаем, есть ли у нас before, и отдаем его
      if (before) {
        const beforeEl = author.querySelector(before);

        if (beforeEl instanceof HTMLElement) {
          return beforeEl.insertAdjacentHTML("beforebegin", html);
        }
      }

      // потом мы чекаем, есть ли у нас after;
      // если и его нет, то подставится наш дефолтный ПОСЛЕ .pa-title
      if (after) {
        const afterEl =
          author.querySelector(after) ?? author.querySelector(".pa-title");

        if (afterEl instanceof HTMLElement) {
          return afterEl.insertAdjacentHTML("afterend", html);
        }
      }
    });
  }
}

export default function setDefaultIcon(props = null) {
  // если нет параметра
  if (props == null) {
    return;
  }

  // если урл-строка
  if (typeof props === "string") {
    return createDefaultIcon({ icon: props });
  }

  // если объект
  return createDefaultIcon(props);
}
