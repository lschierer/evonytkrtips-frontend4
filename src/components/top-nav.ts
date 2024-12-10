import { html, css, LitElement, type PropertyValues } from "lit-element";
import { customElement, property } from "lit-element/decorators.js";

import { TopLevelSections } from "../lib/topLevelSections.ts";

const DEBUG = false;

import "@spectrum-web-components/top-nav/sp-top-nav.js";
import "@spectrum-web-components/top-nav/sp-top-nav-item.js";
import { TopNav } from "@spectrum-web-components/top-nav";
import { Theme, type Color, type Scale } from "@spectrum-web-components/theme";

import "@spectrum-web-components/action-menu/sp-action-menu.js";

import { ActionMenu } from "@spectrum-web-components/action-menu";

import "@spectrum-web-components/menu/sp-menu-item.js";
import "@spectrum-web-components/menu/sp-menu-divider.js";
import { ifDefined } from "@spectrum-web-components/base/src/directives.js";

import baseSpectrum from "../styles/Spectrum.css" with { type: "css" };

@customElement("top-nav")
export default class SPTopNav extends TopNav {
  @property({ type: String })
  public logoLocation: string = "";

  @property({ type: String, reflect: true })
  public themeValue: string = "light";

  static navItemWidth = (1 / (TopLevelSections.options.length + 3)) * 100;

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener("change", (e: Event) => {
      const value = (e.target as ActionMenu).value;
      if (value !== undefined && value !== null && value.length > 0) {
        console.log(`SPTopNav change event new value for theme is ${value}`);
        this.themeValue = (e.target as ActionMenu).value;
      } else {
        console.log(`SPTopNav change event invalid value`);
      }
    });
  }

  private updateTheme = async (color: Color, scale: Scale) => {
    const colorOptions = ["light", "dark"];
    const scaleOptions = ["medium", "large"];
    const themeElement = document.querySelector("sp-theme");
    if (colorOptions.includes(color)) {
      if (scaleOptions.includes(scale)) {
        Promise.all([
          import(`@spectrum-web-components/theme/theme-${color}.js`),
          import(`@spectrum-web-components/theme/scale-${scale}.js`),
        ]).then(() => {
          if (themeElement) {
            (themeElement as Theme).color = color;
            (themeElement as Theme).scale = scale;
          }
        });
      }
    }
  };

  protected willUpdate(_changedProperties: PropertyValues): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has("themeValue")) {
      if (!this.themeValue.toLowerCase().localeCompare("light")) {
        this.updateTheme("light", "medium");
      }
      if (!this.themeValue.toLowerCase().localeCompare("dark")) {
        this.updateTheme("dark", "medium");
      }
      if (!this.themeValue.toLowerCase().localeCompare("auto")) {
        const match = window.matchMedia("(prefers-color-scheme: dark)");
        console.log(`match is ${match}`);
      }
    }
  }
  static override get styles() {
    return [
      baseSpectrum,
      ...super.styles,
      css`
        :host {
          background-color: var(--spectrum-cyan-800);
          width: 100%;
          padding-right: 1px;
          padding-left: 1px;
        }

        sp-top-nav-item {
          display: flex;
          flex-flow: row;
          justify-content: flex-start;
          align-items: center;
          height: 5rem;
        }

        sp-top-nav-item.logo {
          width: calc(${SPTopNav.navItemWidth}% * 2);
          margin-top: 1px;
        }

        sp-top-nav-item.section {
          width: ${SPTopNav.navItemWidth}%;
        }

        img.logo {
          padding: 0px;
          margin-top: 0px;
          margin-bottom: 0px;
          margin-right: 2px;
          margin-left: 5px;
          height: 4rem;
          vertical-align: top;
        }

        span.logo {
          flex-shrink: 1;
          font-size: var(--spectrum-heading-size-xl);
        }

        span.section {
          font-size: var(--spectrum-heading-size-m);
        }
      `,
    ];
  }

  protected render() {
    if (DEBUG) {
      console.log(`TopNav render start`);
    }
    const sections = TopLevelSections.options;
    return html`
      <div id="list">
        <slot @slotchange=${super.onSlotChange}>
          <sp-top-nav-item class="logo" href="/">
              <img
                class="logo"
                src="/assets/TKRTipsLogo.svg"
                alt="Evony TKR Tips Logo"
              ></img>
              <span class="logo">Evony TKR Tips</span>
          </sp-top-nav-item>
          ${sections.map((section) => {
            return html`
              <sp-top-nav-item
                class="section"
                href="/${section.replaceAll(" ", "")}/"
                style="margin-inline-start: auto;"
              >
                <span class="section">${section}</span>
              </sp-top-nav-item>
            `;
          })}
        </slot>
        <sp-action-menu
          label="Theme"
          placement="bottom-end"
          style="margin-inline-start: auto;"
          quiet
          selects="single"
          value="light"
        >
          <sp-menu-item value='light'>Light</sp-menu-item>
          <sp-menu-item value='dark'>Dark</sp-menu-item>
          <sp-menu-divider></sp-menu-divider>
          <sp-menu-item value='auto'>Auto</sp-menu-item>
        </sp-action-menu>

        <div
          id="selection-indicator"
          class=${ifDefined(this.shouldAnimate ? undefined : "first-position")}
          style=${this.selectionIndicatorStyle}
        >
        </div>
      </div>




    `;
  }
}
