// @flow
type KeyEvent = MouseEvent | KeyboardEvent;

export default function isHelperKey({ ctrlKey, metaKey, altKey }: KeyEvent) {
  if (ctrlKey || metaKey || altKey) {
    return true;
  }

  return false;
}
