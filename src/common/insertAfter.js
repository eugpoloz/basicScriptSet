export default function insertAfter(query, html) {
  const el = document.querySelector(query);

  if (el) {
    el.insertAdjacentHTML("afterend", html);
  }
}
