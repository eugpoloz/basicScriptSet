// @flow
import type { DisabledProfiles } from "../commonTypes";

declare var UserID: any;
declare var profile: HTMLElement | Function;

export default function disableProfiles({
  profiles = [],
  message = "Редактирование данного профиля для вас запрещено!"
}: DisabledProfiles) {
  if (profiles.length > 0) {
    const innerHTML = `<p style="margin: 1em 0; line-height: 2; text-align: center;">${message}</p>`;

    // оказывается, у нас есть глобальная переменная profile,
    // которая функция на всех страницах, кроме профиля,
    // и объект (HTMLElement) на профиле, поэтому
    if (typeof profile === "object") {
      profile.style.display = "none";

      // переписываем на Set() и чекаем наличие
      const profilesSet = new Set(profiles);

      if (profilesSet.has(UserID)) {
        profile.innerHTML = innerHTML;
      }

      profile.style.display = "";
    }
  }
}
