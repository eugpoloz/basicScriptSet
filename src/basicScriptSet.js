// @flow
"use strict";

/*
  basicScriptSet
  author: eugpoloz (грандоченька смерти)
  license: MIT

  вопросы и поддержка:
  — https://github.com/eugpoloz/basicScriptSet
  — http://urchoice.rolka.su/profile.php?id=4789
*/

// type definitions and global variables
declare var FORUM: any;
declare var UserID: any;
declare var GroupID: any;
declare var $: any;

type DefaultIcon = {
  icon?: string,
  after?: string
};

type FastLogin = {
  after?: string,
  logins: Array<{
    login: string,
    password: string,
    id?: string,
    link: string
  }>
};

type DisabledProfiles = {
  profiles: Array<number>,
  message?: string
};

type Options = {
  disabledProfiles: DisabledProfiles,
  defaultIcon: DefaultIcon,
  fastLogin: FastLogin
};

// basic function
function basicScriptSet({ disabledProfiles, defaultIcon, fastLogin }: Options) {
  // сначала оригинал загруженного изображения
  // loaded img original first
  (async function originalUploadedFirst() {
    if (typeof FORUM.editor === "object") {
      const insertFormat = document.getElementById("image-insert-format");

      const html = `<strong>Вставить как:</strong>
      <br><br>
      <select id="selected-insert-format">
        <option value="viewer">Превью</option>
        <option value="source" selected>Оригинал</option>
      </select>`;

      if (insertFormat) {
        return (insertFormat.innerHTML = html);
      }
    }
  })();

  // various helper functions
  async function setDefaultIcon({ icon, after = ".pa-title" }: DefaultIcon) {
    if (icon !== undefined && typeof FORUM.topic === "object") {
      document.querySelectorAll(".post-author ul").forEach(author => {
        if (author.querySelector(".pa-avatar")) return;

        const el = after && author.querySelector(after);
        const authorLink = author.querySelector(".pa-author a");
        const alt = (authorLink && authorLink.textContent) || "guest";
        const html = `<li class="pa-avatar item2 default-icon"><img src="${icon}" alt="${alt}" style="cursor: pointer;"></li>`;

        if (el) {
          return el.insertAdjacentHTML("afterend", html);
        }
      });
    }
  }

  async function disableProfileEditing({
    profiles = [],
    message = "Редактирование данного профиля для вас запрещено."
  }: DisabledProfiles) {
    if (profiles.length > 0) {
      const profile = document.getElementById("profile");
      const innerHTML = `<p style="margin: 1em 0; line-height: 2">${message}</p>`;

      // form jQuery method that checks if main #pun is ready (I guess)
      // this is useful for us tho
      $(document).pun_mainReady(() => {
        if (profile) {
          profile.style.display = "none";

          profiles.forEach(disabled => {
            if (UserID === disabled) {
              return (profile.innerHTML = innerHTML);
            }
          });

          profile.style.display = "block";
        }
      });
    }
  }

  async function createFastLoginLinks({
    after = "navlogin",
    logins = []
  }: FastLogin) {
    if (GroupID === 3) {
      function handleFastLoginClick({ target }: { target: EventTarget }) {
        const html = `<div id="additional_login" style="display: none">
          <form id="form_login" name="login" method="post" action="/login.php?action=in" onsubmit="return check_form()">
            <fieldset>
              <input type="hidden" name="form_sent" value="1" />
              <input type="text" id="fld1" name="req_username" size="21" maxlength="25" />
              <input type="text" id="fld2" name="req_password" size="7" maxlength="16"/>
              <input type="submit" class="button" name="login"/>
            </fieldset>
          </form>
        </div>`;

        const navlinks = document.getElementById("pun-navlinks");

        if (navlinks) {
          navlinks.insertAdjacentHTML("afterend", html);
        }

        if (target instanceof HTMLElement) {
          const { login, password } = target.dataset;

          const form = document.querySelector("#additional_login #form_login");
          if (form) {
            const loginInput = form.querySelector("#fld1");
            const passwordInput = form.querySelector("#fld2");
            const submit = form.querySelector("input[type='submit']");

            if (loginInput instanceof HTMLInputElement) {
              loginInput.value = login;
            }
            if (passwordInput instanceof HTMLInputElement) {
              passwordInput.value = password;
            }

            if (submit) {
              // TODO: refactor from jQuery plz
              return submit.click();
            }
          }
        }
      }

      if (logins.length > 0) {
        const loginMap = logins.map(({ id, link, login, password }, i) => {
          const liID = id || `navAdd${i}`;

          return `<li id="${liID}"><a class="js_login" style="cursor: pointer;" data-login="${login}" data-password="${password}">${link}</a></li>`;
        });

        const afterEl = document.getElementById(after);
        afterEl && afterEl.insertAdjacentHTML("afterend", loginMap.join(""));

        document
          .querySelectorAll("a.js_login")
          .forEach(
            (node: HTMLElement) =>
              node && node.addEventListener("click", handleFastLoginClick)
          );
      }
    }
  }

  // calling functions w/ passed props
  setDefaultIcon(defaultIcon);
  createFastLoginLinks(fastLogin);
  disableProfileEditing(disabledProfiles);
}

// possible config for reference:
// basicScriptSet({
//   disabledProfiles: {
//     profiles: [4]
//   }, // айди профилей в квадратных скобках через запятую
//   defaultIcon: {
//     icon: "http://forumavatars.ru/img/avatars/0019/83/8b/85-1520334341.png" // ссылка
//   },
//   fastLogin: {
//     logins: [
//       {
//         login: "reader test",
//         password: "12345",
//         id: "navreader",
//         link: "Peek Inside"
//       }
//     ]
//   }
// });
