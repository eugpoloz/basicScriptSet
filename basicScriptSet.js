// @flow

// type definitions
type DefaultIcon = {
  icon: string,
  after?: string
};

type ForbidEditingProfiles = Array<number>;

type FastLogin = {
  after?: string,
  logins: Array<{
    login: string,
    password: string,
    id?: string,
    link: string
  }>
};

type Options = {
  forbidEditingProfiles?: ForbidEditingProfiles,
  defaultIcon?: DefaultIcon,
  fastLogin?: FastLogin
};

// basic function
function basicScriptSet({ forbidEditingProfiles, defaultIcon, fastLogin }) {
  async function originalUploadedFirst() {
    if (typeof FORUM.topic === "object") {
      const insertFormat = document.getElementById("image-insert-format");

      const html = `<strong>Вставить как:</strong>
      <br><br>
      <select id="selected-insert-format">
        <option value="viewer">Превью</option>
        <option value="source" selected>Оригинал</option>
      </select>`;

      insertFormat.innerHTML = html;
    }
  }

  // our helper functions
  async function setDefaultIcon({ icon, after = ".pa-title" }) {
    if (typeof icon === "string" && typeof FORUM.topic === "object") {
      document.querySelectorAll(".post-author ul").forEach(author => {
        if (author.querySelector(".pa-avatar")) return;

        const el = author.querySelector(after);
        const alt = author.querySelector(".pa-author a").textContent || "guest";
        const html = `<li class="pa-avatar item2 default-icon"><img src="${icon}" alt="${alt}" style="cursor: pointer;"></li>`;

        return el.insertAdjacentHTML("afterend", html);
      });
    }
  }

  async function disableProfileEditing(profileArray = []) {
    if (profileArray.length > 0) {
      profileArray.forEach(uID => {
        if (UserID === uID && document.URL.includes("profile.php")) {
          const profile = document.getElementById("profile");

          profile.innerHTML = `<p style="margin: 1em 0; line-height: 2">
          Редактирование данного профиля для вас запрещено.
        </p>`;
        }
      });
    }
  }

  async function createFastLoginLinks({ after = "navlogin", logins = [] }) {
    if (GroupID === 3) {
      function handleFastLoginClick({ target }) {
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

        document
          .getElementById("pun-navlinks")
          .insertAdjacentHTML("afterend", html);

        const { login, password } = target.dataset;

        const form = document.querySelector("#additional_login #form_login");
        const loginInput = form.querySelector("#fld1");
        const passwordInput = form.querySelector("#fld2");
        const submit = form.querySelector("input[type='submit']");

        loginInput.value = login;
        passwordInput.value = password;

        submit.click();
      }

      logins.forEach(({ id, link, login, password }, idx) => {
        const liID = id || `navAdd${idx}`;
        const html = `<li id="${liID}"><a class="js_login" style="cursor: pointer;" data-login="${login}" data-password="${password}">${link}</a></li>`;

        document.getElementById(after).insertAdjacentHTML("afterend", html);
      });

      document
        .querySelectorAll("a.js_login")
        .forEach(node => node.addEventListener("click", handleFastLoginClick));
    }
  }


  }

  // ...and let's call those!
  originalUploadedFirst();
  createFastLoginLinks(fastLogin);
  disableProfileEditing(forbidEditingProfiles);
  setDefaultIcon(defaultIcon);
}

basicScriptSet({
  forbidEditingProfiles: [3], // айди профилей в квадратных скобках через запятую
  defaultIcon: {
    icon: "http://forumavatars.ru/img/avatars/0019/83/8b/85-1520334341.png" // ссылка
  },
  fastLogin: {
    logins: [
      {
        login: "reader test",
        password: "12345",
        id: "navreader",
        link: "Peek Inside"
      }
    ]
  }
});
