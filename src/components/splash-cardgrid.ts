import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

const DEBUG = 1;

type Section = {
  title: string;
  name: string;
  description?: string;
};

export const isolation = true;
export const hydration = true;
export const prerender = false;

@customElement("splash-cardgrid")
export default class SplashCardGrid extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  protected render() {
    if (DEBUG) {
      console.log(`SplashCardGrid render start`);
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

    return html`
      <div class="cardGrid" role="grid">
        ${sections.map((section) => {
          return html`
            <horizontal-card
              title="${section.title}"
              iconName="${section.name}"
              iconHeight="1.2rem"
              iconWidth="1.2rem"
              description="${section.description ? section.description : ""} "
            ></horizontal-card>
          `;
        })}
      </div>
    `;
  }
}
