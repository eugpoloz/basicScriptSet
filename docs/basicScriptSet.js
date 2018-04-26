
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function basicScriptSet(_ref) {
  var originalUploadedFirst = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var insertFormat, html;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_typeof(FORUM.editor) === "object") {
                insertFormat = document.getElementById("image-insert-format");
                html = "<strong>\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043A:</strong>\n      <br><br>\n      <select id=\"selected-insert-format\">\n        <option value=\"viewer\">\u041F\u0440\u0435\u0432\u044C\u044E</option>\n        <option value=\"source\" selected>\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B</option>\n      </select>";


                insertFormat.innerHTML = html;
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function originalUploadedFirst() {
      return _ref2.apply(this, arguments);
    };
  }();

  var setDefaultIcon = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_ref3) {
      var icon = _ref3.icon,
          _ref3$after = _ref3.after,
          after = _ref3$after === undefined ? ".pa-title" : _ref3$after;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (typeof icon === "string" && _typeof(FORUM.topic) === "object") {
                document.querySelectorAll(".post-author ul").forEach(function (author) {
                  if (author.querySelector(".pa-avatar")) return;

                  var el = author.querySelector(after);
                  var alt = author.querySelector(".pa-author a").textContent || "guest";
                  var html = "<li class=\"pa-avatar item2 default-icon\"><img src=\"" + icon + "\" alt=\"" + alt + "\" style=\"cursor: pointer;\"></li>";

                  return el.insertAdjacentHTML("afterend", html);
                });
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function setDefaultIcon(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var disableProfileEditing = function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      var profileArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var i, profile;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (profileArray.length > 0) {
                for (i = 0; i < profileArray.length; i++) {
                  if (UserID === profileArray[i] && document.URL.includes("profile.php")) {
                    profile = document.getElementById("profile");


                    profile.innerHTML = "<p style=\"margin: 1em 0; line-height: 2\">\n          \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0434\u043B\u044F \u0432\u0430\u0441 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E.\n        </p>";
                  }
                }
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function disableProfileEditing() {
      return _ref5.apply(this, arguments);
    };
  }();

  var createFastLoginLinks = function () {
    var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(_ref6) {
      var _ref6$after = _ref6.after,
          after = _ref6$after === undefined ? "navlogin" : _ref6$after,
          _ref6$logins = _ref6.logins,
          logins = _ref6$logins === undefined ? [] : _ref6$logins;
      var handleFastLoginClick, loginMap;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (GroupID === 3) {
                handleFastLoginClick = function handleFastLoginClick(_ref8) {
                  var target = _ref8.target;

                  var html = "<div id=\"additional_login\" style=\"display: none\">\n          <form id=\"form_login\" name=\"login\" method=\"post\" action=\"/login.php?action=in\" onsubmit=\"return check_form()\">\n            <fieldset>\n              <input type=\"hidden\" name=\"form_sent\" value=\"1\" />\n              <input type=\"text\" id=\"fld1\" name=\"req_username\" size=\"21\" maxlength=\"25\" />\n              <input type=\"text\" id=\"fld2\" name=\"req_password\" size=\"7\" maxlength=\"16\"/>\n              <input type=\"submit\" class=\"button\" name=\"login\"/>\n            </fieldset>\n          </form>\n        </div>";

                  document.getElementById("pun-navlinks").insertAdjacentHTML("afterend", html);

                  var _target$dataset = target.dataset,
                      login = _target$dataset.login,
                      password = _target$dataset.password;


                  var form = document.querySelector("#additional_login #form_login");
                  var loginInput = form.querySelector("#fld1");
                  var passwordInput = form.querySelector("#fld2");
                  var submit = form.querySelector("input[type='submit']");

                  loginInput.value = login;
                  passwordInput.value = password;

                  submit.click();
                };

                if (logins.length > 0) {
                  loginMap = logins.map(function (_ref9, i) {
                    var id = _ref9.id,
                        link = _ref9.link,
                        login = _ref9.login,
                        password = _ref9.password;

                    var liID = id || "navAdd" + i;

                    return "<li id=\"" + liID + "\"><a class=\"js_login\" style=\"cursor: pointer;\" data-login=\"" + login + "\" data-password=\"" + password + "\">" + link + "</a></li>";
                  });


                  document.getElementById(after).insertAdjacentHTML("afterend", loginMap.join(""));

                  document.querySelectorAll("a.js_login").forEach(function (node) {
                    return node.addEventListener("click", handleFastLoginClick);
                  });
                }
              }

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function createFastLoginLinks(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();

  var forbidEditingProfiles = _ref.forbidEditingProfiles,
      defaultIcon = _ref.defaultIcon,
      fastLogin = _ref.fastLogin;

  originalUploadedFirst();
  createFastLoginLinks(fastLogin);
  disableProfileEditing(forbidEditingProfiles);
  setDefaultIcon(defaultIcon);
}