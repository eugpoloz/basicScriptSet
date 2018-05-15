// @flow
import type { DisabledProfiles } from "./bss";

declare var UserID: any;
declare var $: any;

export default function disableProfileEditing({
  profiles = [],
  message = "Редактирование данного профиля для вас запрещено."
}: DisabledProfiles) {
  // form jQuery method that checks if main #pun is ready (I guess)
  // this is useful for us (I guess?)
  $().pun_mainReady(function() {
    const profile = document.getElementById("profile");
    if (profile && profiles.length > 0) {
      profile.style.display = "none";

      const innerHTML = `<p style="margin: 1em 0; line-height: 2">${message}</p>`;

      profiles.forEach(disabled => {
        if (UserID === disabled) {
          return (profile.innerHTML = innerHTML);
        }
      });

      profile.style.display = "";
    }
  });
}
