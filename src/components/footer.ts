import {
  html,
  css,
  LitElement,
  unsafeCSS,
  type CSSResultArray,
} from "lit-element";
import { customElement } from "lit/decorators.js";

import baseTheme from "../styles/theme.css" with { type: "css" };
import SpectrumTokens from "/node_modules/@spectrum-css/tokens/dist/index.css" with { type: "css" };
import SpectrumCard from "/node_modules/@spectrum-css/card/dist/index.css" with { type: "css" };

const DEBUG = 1;

export const isolation = true;
export const hydration = true;
export const prerender = true;

@customElement("app-footer")
export default class AppFooter extends LitElement {
  static localStyle = css`
    footer {
      background-color: var(--spectrum-cyan-800);
    }
    h4 {
      margin-left: 8px;
    }
  `;

  public static override get styles(): CSSResultArray {
    const baseThemeCss = unsafeCSS(baseTheme);
    const SpectrumTokensCss = unsafeCSS(SpectrumTokens);
    const SpectrumCardCss = unsafeCSS(SpectrumCard);

    if (super.styles !== undefined && Array.isArray(super.styles)) {
      return [
        ...super.styles,
        SpectrumTokensCss,
        SpectrumCardCss,
        baseThemeCss,
        AppFooter.localStyle,
      ];
    } else {
      return [
        SpectrumTokensCss,
        SpectrumCardCss,
        baseThemeCss,
        AppFooter.localStyle,
      ];
    }
  }
  protected render() {
    if (DEBUG) {
      console.log(`AppFooter render start`);
    }
    const year = new Date().getFullYear();

    return html`
      <html>
        <body>
          <style></style>

          <footer>
            <h4>Evony TKR Tips &copy;2023-${year}</h4>
          </footer>
        </body>
      </html>
    `;
  }
}
