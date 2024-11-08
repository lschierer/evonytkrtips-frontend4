import { html, css, LitElement, unsafeCSS, type CSSResultArray } from "lit";
import { customElement } from "lit/decorators.js";

import SpectrumCard from "/node_modules/@spectrum-css/card/dist/index.css" with { type: "css" };

import SpectrumElement from "./SpectrumElement.ts";

const DEBUG = 1;

export const isolation = true;
export const hydration = true;
export const prerender = true;

@customElement("app-footer")
export default class AppFooter extends SpectrumElement {
  static localStyle = css`
    footer {
      background-color: var(--spectrum-cyan-800);
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    h4 {
      margin-left: 8px;
    }
  `;

  static styles =
    super.styles !== undefined && Array.isArray(super.styles)
      ? [...super.styles, SpectrumCard, AppFooter.localStyle]
      : [SpectrumCard, AppFooter.localStyle];

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
