// @flow
export function insertAfterAreafield(html: string) {
  const areafield = document.querySelector("p.areafield.required");
  if (areafield) {
    areafield.insertAdjacentHTML("afterend", html);
  }
}

type KeyEvent = MouseEvent | KeyboardEvent;

export function isHelperKey({ ctrlKey, metaKey, altKey }: KeyEvent) {
  if (ctrlKey || metaKey || altKey) {
    return true;
  }

  return false;
}
