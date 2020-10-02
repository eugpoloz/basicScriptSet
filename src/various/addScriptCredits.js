// @flow
import idx from "idx";

declare var $: {
  jGrowl: Function
};

type Contact = {
  url: string, // link
  title: string // link title
};

type Credit = {
  name: string, // script name
  author: string, // author name
  url: string, // link to script page
  contacts?: Array<Contact>
};

function createCreditHTML({ name, author, url, contacts = [] }: Credit) {
  let contactsHTML = "";

  if (contacts.length > 0) {
    contactsHTML = contacts
      .map(
        ({ url, title }: Contact) =>
          `<a href="${url}" target="_blank" title="${title}">${title}</a>`
      )
      .join(" | ");
  }

  return `
    <li style="padding: 1rem 0; line-height: inherit;">
      <strong>
        <a href="${url}" target="_blank" title="${name}">${name}</a>
      </strong>
      <br/>
      <span>
        © ${author}
        ${contactsHTML ? ` (${contactsHTML})` : ""}
      </span>
    </li>
  `;
}

export type CreditsProps =
  | Array<Credit>
  | {
      text?: string,
      credits: Array<Credit>
    };

function createScriptCredits({
  text,
  credits
}: {
  text: string,
  credits: Array<Credit>
}) {
  const about = document.getElementById("pun-about");

  if (about instanceof HTMLElement) {
    const container = about.querySelector("p.container");
    const triggerHTML = `
      <style>
        .jGrowl-notification.jGrowl-credits {
          width: auto;
        }
        .jGrowl-notification.jGrowl-credits .jGrowl-header {
          position: relative;
          z-index: -1;
        }
        .jGrowl-notification.jGrowl-credits li:not(:last-of-type) {
          border-bottom: 1px solid rgba(255,255,255,.25);
        }
        .jGrowl-notification.jGrowl-credits a {
          color: #fff;
        }
        .jGrowl-notification.jGrowl-credits ul {
          margin-bottom: 0;
          padding: 0 1.5em;
          line-height: 1.5;
          border-top: 1px solid rgba(255,255,255,.25);
        }
        .jGrowl-notification.jGrowl-credits ul a:hover,
        .jGrowl-notification.jGrowl-credits ul a:focus,
        .jGrowl-notification.jGrowl-credits ul a:active {
          text-decoration: none;
        }
      </style>
      <a href="#" id="script-credit-trigger">
        ${text}
      </a>`;

    if (container instanceof HTMLElement) {
      container.insertAdjacentHTML(
        "afterbegin",
        `<span>${triggerHTML} | </span>`
      );
    } else {
      about.insertAdjacentHTML(
        "beforeend",
        `<p class="container"><span>${triggerHTML}</span></p>`
      );
    }

    const triggerEl = document.getElementById("script-credit-trigger");
    const creditsHTML = credits.map(createCreditHTML).join("");

    if (triggerEl instanceof HTMLElement) {
      triggerEl.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();

        return $.jGrowl(`<ul>${creditsHTML}</ul>`, {
          header: `<strong style="line-height: 1.5;">${text}</strong>`,
          theme: "jGrowl-credits",
          position: "bottom-right",
          sticky: true
        });
      });
    }
  }
}

export default function addScriptCredits(props: CreditsProps): void {
  let text: string = "Скрипты форума";
  let credits = [];

  if (props) {
    credits = Array.isArray(props) ? props : props.credits;

    if (typeof props.text === "string") {
      text = props.text;
    }
  }

  const defaultCredits = [
    {
      name: "basicScriptSet",
      author: "eugpoloz (грандоченька смерти)",
      url: "https://github.com/eugpoloz/basicScriptSet",
      contacts: [
        {
          title: "lyl",
          url: "http://urchoice.rolka.su/messages.php?action=new&uid=4789"
        },
        {
          title: "github",
          url: "https://github.com/eugpoloz"
        }
      ]
    }
  ];

  return createScriptCredits({
    text,
    credits: [...defaultCredits, ...credits]
  });
}
