import { LitElement, css, html, type CSSResultArray, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import baseTheme from "../styles/theme.css" with { type: "css" };
import SpectrumTokens from "../../node_modules/@spectrum-css/tokens/dist/index.css" with { type: "css" };
import SpectrumCard from "../../node_modules/@spectrum-css/card/dist/index.css" with { type: "css" };
import { unsafeCSS, type PropertyValues } from "@lit/reactive-element";
const DEBUG = 1;

export const isolation = true;
export const hydration = true;
export const prerender = false;

@customElement("horizontal-card")
export class HorizontalCard extends LitElement {
  @property({ type: String })
  public title: string = "";

  @property({ type: String })
  public description: string = "";

  @property({ type: String })
  public iconName: string = "";

  @property({ type: String })
  public iconWidth: string = "";

  @property({ type: String })
  public iconHeight: string = "";

  @state()
  private _targetUrl = "/";

  constructor() {
    super();
    if (this.title.length > 0) {
      const target = this.title.toLowerCase().replaceAll(" ", "-");
      this._targetUrl = `/${target}/`;
    }

    if (DEBUG) {
      console.log(
        `_targetUrl from constructor is ${this._targetUrl.toString()}`,
      );
    }
  }
  protected override willUpdate(_changedProperties: PropertyValues): void {
    if (DEBUG) {
      console.log(`willupdate start`);
      console.log(`_changedProperties has ${Object.keys(_changedProperties)}`);
      console.log(`title is ${this.title}`);
    }
    if (
      _changedProperties.has("title") ||
      this.title.length > this._targetUrl.length
    ) {
      const target = this.title.toLowerCase().replaceAll(" ", "-");
      this._targetUrl = `/${target}/`;
      if (DEBUG) {
        console.log(`_targetUrl is ${this._targetUrl}`);
      }
    }
  }

  public static override get styles(): CSSResultArray {
    const baseThemeCss = unsafeCSS(baseTheme);
    const SpectrumTokensCss = unsafeCSS(SpectrumTokens);
    const SpectrumCardCss = unsafeCSS(SpectrumCard);
    const localStyle = css``;
    if (super.styles !== undefined && Array.isArray(super.styles)) {
      return [
        ...super.styles,
        SpectrumTokensCss,
        SpectrumCardCss,
        baseThemeCss,
        localStyle,
      ];
    } else {
      return [SpectrumTokensCss, SpectrumCardCss, baseThemeCss, localStyle];
    }
  }

  protected render() {
    let iconHTML = html``;
    if (this.iconName.length > 0) {
      iconHTML = html`
        <iconify-icon
          icon="${this.iconName}"
          width="${this.iconWidth || nothing}"
          height="${this.iconHeight || nothing}"
          aria-hidden="true"
          focusable="false"
          role="img"
        ></iconify-icon>
      `;
    }
    return html`
      <div class="spectrum spectrum--medium spectrum--light">
        <a href="${this._targetUrl}">
          <div
            class="spectrum-Card spectrum-Card--horizontal"
            tabindex="0"
            role="figure"
          >
            <div class="spectrum-Card-preview">${iconHTML}</div>
            <div class="spectrum-Card-body">
              <div class="spectrum-Card-header">
                <div
                  class="spectrum-Card-title spectrum-Heading spectrum-Heading--sizeXS"
                >
                  ${this.title}
                </div>
              </div>
              <div class="spectrum-Card-content">
                <div class="spectrum-Card-description">${this.description}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    `;
  }
}

type Section = {
  title: string;
  name: string;
  description?: string;
};

export default class SplashCardGrid extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate().innerHTML;
  }

  getTemplate() {
    const template = document.createElement("template");
    if (DEBUG) {
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
