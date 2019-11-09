// @flow
declare var FORUM: Object;
declare var UserID: number;

// todo:
// 1. basic functionality
// 2. ui to configure
// 3. save settings to mybb storage

type HideUserPosts = {
  profiles: Array<number>
};

export default function hideUserPosts({ profiles = [39] }: HideUserPosts) {
  if (profiles.length > 0 && typeof FORUM.topic === "object") {
    const posts = document.querySelectorAll(".post");

    posts.forEach((post: HTMLElement) => {
      const respect = Array.from(post.querySelectorAll(".pa-respect a"));
      const postNumberContainer = post.querySelector("h3 span strong");
      const postNumber = postNumberContainer
        ? +postNumberContainer.innerText
        : -1;
      const postContent = post.querySelector(".post-content");

      const linkArray = respect.filter(
        link =>
          link instanceof HTMLAnchorElement && link.href.includes("respect.php")
      );

      const link = linkArray ? linkArray[0] : null;

      if (link && link instanceof HTMLAnchorElement) {
        const hrefArray = link.href.split("?id=");
        const id = hrefArray.length > 1 ? +hrefArray[1] : null;

        if (
          id &&
          id !== UserID &&
          profiles.includes(id) &&
          postNumber > 1 &&
          postContent
        ) {
          postContent.style.height = "0px";
        }
      }
    });
  }
}
