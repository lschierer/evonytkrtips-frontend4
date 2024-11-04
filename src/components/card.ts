import { LitElement, css, html, type CSSResultArray, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

import baseTheme from "@styles/theme.css?inline";
import { unsafeCSS } from "@lit/reactive-element";

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

  public static override get styles(): CSSResultArray {
    const baseThemeCss = unsafeCSS(baseTheme);
    const localStyle = css``;
    if (super.styles !== undefined && Array.isArray(super.styles)) {
      return [...super.styles, baseThemeCss, localStyle];
    } else {
      return [baseThemeCss, localStyle];
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
        ></iconify-icon>
      `;
    }
    return html`
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
    `;
  }
}
