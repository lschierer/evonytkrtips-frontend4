import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

const DEBUG = 1;

type Section = {
  title: string;
  name: string;
  description?: string;
};

export const isolation = true;
export const hydration = true;
export const prerender = false;

@customElement("card-grid")
export default class CardGrid extends LitElement {
  @property()
  public sections: Section[] = new Array<Section>();

  protected createRenderRoot() {
    return this;
  }

  protected render() {
    if (DEBUG) {
      console.log(`SplashCardGrid render start`);
    }

    return html`
      <div class="cardGrid" role="grid">
        ${this.sections.length > 0 &&
        this.sections.map((section) => {
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
