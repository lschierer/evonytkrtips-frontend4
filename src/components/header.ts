import { html, css, LitElement, unsafeCSS, type CSSResultArray } from "lit";
import { customElement } from "lit/decorators.js";

import SpectrumElement from "./SpectrumElement.ts";

import { TopLevelSections } from "../lib/topLevelSections.ts";

const DEBUG = 1;

export const isolation = true;
export const hydration = true;
export const prerender = true;

@customElement("app-header")
export default class AppHeader extends SpectrumElement {
  static localStyle = css`
    .header {
      background-color: var(--spectrum-cyan-800);
      min-height: 30px;
      padding: 10px;
      font-size: 1.2rem;
      width: 100;
    }

    .head-wrap {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .brand {
      justify-items: left;
      padding: 10px;
    }

    .brand img {
      float: left;
      height: 90;
      width: 100;
    }

    .header .social {
      margin-left: auto;
      text-align: right;
    }

    .nav {
      margin-left: 5rem;
      width: 100;
      height: 100;
      flex-grow: 4;
      display: flex;
      justify-items: stretch;
      align-content: space-evenly;
      flex-wrap: wrap;
    }

    .nav-item {
      height: 100;
      flex-grow: 1;
      flex-shrink: 1;
    }
  `;

  static styles =
    super.styles !== undefined && Array.isArray(super.styles)
      ? [...super.styles, AppHeader.localStyle]
      : [AppHeader.localStyle];

  protected render() {
    if (DEBUG) {
      console.log(`AppHeader render start`);
    }
    const sections = TopLevelSections.options;

    return html`
      <header class="header">
        <div class="head-wrap">
          <div class="brand">
            <a href="/">
              <img src="/assets/Logo.svg" alt="EvonyTKRTips logo" />
            </a>
          </div>
          <div class="nav">
            ${sections.map((section) => {
              return html`
                <div class="nav-item">
                  <a href="/${section.toLowerCase().replaceAll(" ", "-")}/">
                    <span>${section}</span>
                  </a>
                </div>
              `;
            })}
          </div>
          <div class="social">
            <a href="https://github.com/lschierer/evonytkrtips-frontend">
              <iconify-icon
                icon="mdi:github"
                width="2rem"
                height="2rem"
              ></iconify-icon>
            </a>
          </div>
        </div>
      </header>
    `;
  }
}
