import {
  LitElement,
  unsafeCSS,
  type CSSResultArray,
  type CSSResultOrNative,
  type PropertyValues,
  css,
  html,
  nothing,
} from "lit";
import { customElement, property, state } from "lit/decorators.js";

import SpectrumCard from "/node_modules/@spectrum-css/card/dist/index.css" with { type: "css" };

import SpectrumElement from "./SpectrumElement.ts";

const DEBUG = 1;

@customElement("horizontal-card")
class HorizontalCard extends LitElement {
  @property({ type: String })
  public cardTitle: string = "";

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
    if (this.cardTitle.length > 0) {
      const target = this.cardTitle.toLowerCase().replaceAll(" ", "-");
      this._targetUrl = `/${target}/`;
    }

    if (DEBUG) {
      console.log(
        `_targetUrl from constructor is ${this._targetUrl.toString()}`
      );
    }
  }
  protected override willUpdate(_changedProperties: PropertyValues): void {
    if (DEBUG) {
      console.log(`willupdate start`);
      console.log(`_changedProperties has ${Object.keys(_changedProperties)}`);
      console.log(`cardTitle is ${this.cardTitle}`);
    }
    if (
      _changedProperties.has("cardTitle") ||
      this.cardTitle.length > this._targetUrl.length
    ) {
      const target = this.cardTitle.toLowerCase().replaceAll(" ", "-");
      this._targetUrl = `/${target}/`;
      if (DEBUG) {
        console.log(`_targetUrl is ${this._targetUrl}`);
      }
    }
  }

  static localStyle = css`
    :host {
      /*background-color: var(--spectrum-green-500);*/
    }
  `;

  static override styles =
    super.styles != undefined && Array.isArray(super.styles)
      ? [...super.styles, SpectrumCard, HorizontalCard.localStyle]
      : [SpectrumCard, HorizontalCard.localStyle];

  protected override render() {
    if (DEBUG) {
      console.log(`HorizontalCard styles is ${HorizontalCard.styles}`);
    }
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
                class="spectrum-Card-cardTitle spectrum-Heading spectrum-Heading--sizeXS"
              >
                ${this.cardTitle}
              </div>
            </div>
            <div class="spectrum-Card-content">
              <div class="spectrum-Card-description">${this.description}</div>
            </div>
          </div>
        </div>
      </a>
    `;
  }
}

export default HorizontalCard;
