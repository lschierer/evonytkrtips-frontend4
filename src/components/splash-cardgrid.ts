const debug = 1;

type Section = {
  title: string;
  name: string;
  description?: string;
};
export const isolation = true;
export const hydration = true;
export const prerender = false;

export default class SplashCardGrid extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate().innerHTML;
  }

  getTemplate() {
    const template = document.createElement("template");
    if (debug) {
      console.log(`SplashCardGrid connectedCallback started`);
    }
    const sections: Section[] = [
      {
        title: "Generals",
        name: "healthicons:officer-outline",
        description: "All about picking generals.",
      },
      {
        title: "Monsters",
        name: "game-icons:fish-monster",
        description: "All about hunting monsters.",
      },
      {
        title: "SvS",
        name: "mdi:sword-fight",
        description: "All about participating in SvS.",
      },
      { title: "Reference", name: "ion:library-outline" },
    ];

    if (!this.shadowRoot) {
      template.innerHTML = `

          <div class="cardGrid" role="grid">
            ${sections
              .map((section) => {
                return `
                <horizontal-card
                  title="${section.title}"
                  iconName="${section.name}"
                  iconHeight="1.2rem"
                  iconWidth="1.2rem"
                  description="${
                    section.description ? section.description : null
                  } "
                ></horizontal-card>
              `;
              })
              .join("")}
          </div>
        `;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
      return shadowRoot;
    } else {
      return template;
    }
  }
}
customElements.define("splash-cardgrid", SplashCardGrid);
