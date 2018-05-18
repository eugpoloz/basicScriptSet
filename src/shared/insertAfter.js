// @flow
export default function insertAfter(query: string, html: string) {
  const el = document.querySelector(query);
  if (el) {
    el.insertAdjacentHTML("afterend", html);
  }
}
