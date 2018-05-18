// @flow
export default function insertAfterAreafield(html: string) {
  const areafield = document.querySelector("p.areafield.required");
  if (areafield) {
    areafield.insertAdjacentHTML("afterend", html);
  }
}
