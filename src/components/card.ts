import {
  LitElement,
  type PropertyValues,
  css,
  unsafeCSS,
  html,
  nothing,
  type CSSResultArray,
} from "lit";
import { customElement, property, state } from "lit/decorators.js";

import baseTheme from "../styles/theme.css" with { type: "css" };
import SpectrumTokens from "../../node_modules/@spectrum-css/tokens/dist/index.css" with { type: "css" };
import SpectrumTypography from '../../node_modules/@spectrum-css/typography/dist/index.css' with {type: "css"};
import SpectrumPage from '../../node_modules/@spectrum-css/page/dist/index.css' with {type: "css"};
import SpectrumCard from "../../node_modules/@spectrum-css/card/dist/index.css" with { type: "css" };

const DEBUG = 1;

export const isolation = true;
export const hydration = true;
export const prerender = false;

@customElement("horizontal-card")
export default class HorizontalCard extends LitElement {
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

  static localStyle = css`
    div {
      background-color: var(--spectrum-green-500);
    }
  `;

  public static override get styles(): CSSResultArray {
    const baseThemeCss = unsafeCSS(baseTheme);
    const SpectrumTokensCss = unsafeCSS(SpectrumTokens);
    const SpectrumTypographyCss = unsafeCSS(SpectrumTypography);
    const SpectrumPageCSS = unsafeCSS(SpectrumPage);
    const SpectrumCardCss = unsafeCSS(SpectrumCard);
    if (super.styles !== undefined && Array.isArray(super.styles)) {
      return [
        ...super.styles,
        SpectrumTokensCss,
        SpectrumTypographyCss,
        SpectrumPageCSS,
        SpectrumCardCss,
        HorizontalCard.localStyle,
      ];
    } else {
      return [SpectrumTokensCss, SpectrumTypographyCss, SpectrumPageCSS, SpectrumCardCss, HorizontalCard.localStyle];
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
                    <a href="${this._targetUrl}">
                      <div class="spectrum-Card-description">${this.description}</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `;
    }
  }
}
