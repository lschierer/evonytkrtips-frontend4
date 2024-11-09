import {
  LitElement,
  html,
  css,
  nothing,
  type CSSResultArray,
  type TemplateResult,
} from "lit";
import { customElement, property } from "lit/decorators.js";
import { until } from "lit/directives/until.js";

import { getContentByCollection } from "@greenwood/cli/src/data/client.js";

import SpectrumElement from "./SpectrumElement.ts";
import { TopLevelSections } from "../lib/topLevelSections.ts";
import SpectrumSideNav from "/node_modules/@spectrum-css/sidenav/dist/index.css" with { type: "css" };

import GeneralsTheme from "../styles/generals.css" with { type: "css" };

export const isolation = true;
export const prerender = false;
const DEBUG = 1;

type Page = {
  id: string;
  title: string;
  label: string;
  route: string;
  data: {};
};

@customElement("side-nav")
export default class SideNav extends SpectrumElement {
  @property({ type: String, reflect: true })
  public route: string = "";

  private async getSectionContents() {
    const sectionHeader = this.route.split("/")[1] ?? "TopIndex";
    if (DEBUG) {
      console.log(
        `SideNav getSectionContents sectionHeader is ${sectionHeader}`
      );
    }
    const sectionItems: Page[] = (
      await getContentByCollection(sectionHeader)
    ).sort((a: Page, b: Page) => {
      if (
        Object.keys(a.data).includes("order") &&
        Object.keys(b.data).includes("order")
      ) {
        return a.data["order" as keyof typeof a.data] >
          b.data["order" as keyof typeof b.data]
          ? 1
          : -1;
      } else {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      }
    });

    return sectionItems.map((si) => {
      let selected = false;
      if (!this.route.toLowerCase().localeCompare(si.route)) {
        selected = true;
      }
      return html`
        <li class="spectrum-SideNav-item" ?is-selected=${selected}>
          <a href="${si.route}" class="spectrum-SideNav-itemLink">
            <iconify-icon
              icon="ep:document"
              class="spectrum-Icon spectrum-Icon--sizeM"
              focusable="false"
              aria-hidden="true"
            ></iconify-icon>
            <span class="spectrum-SideNav-link-text">${si.title}</span>
          </a>
        </li>
      `;
    });
  }

  static localStyle = css``;

  static styles =
    super.styles !== undefined && Array.isArray(super.styles)
      ? [...super.styles, SpectrumSideNav, GeneralsTheme, SideNav.localStyle]
      : [SpectrumSideNav, GeneralsTheme, SideNav.localStyle];

  private getTopLevels(): TemplateResult[] {
    const templates = new Array<TemplateResult>();
    TopLevelSections.options.map((tls) => {
      if (DEBUG) {
        console.log(`tls is ${tls}`);
      }
      let selected = false;
      if (!this.route.toLowerCase().localeCompare(`/${tls.toLowerCase()}/`)) {
        selected = true;
      }
      let contains = false;
      if (selected || this.route.startsWith(`/${tls.toLowerCase()}`)) {
        if (DEBUG) {
          console.log(
            `found tls section ${tls} contains current route ${this.route}`
          );
        }
        contains = true;
      }
      templates.push(html`
        <li class="spectrum-SideNav-item ?is-selected=${selected}">
          <a href="/${tls.toLowerCase()}/" class="spectrum-SideNav-itemLink">
            <iconify-icon
              icon="lsicon:folder-filled"
              class="spectrum-Icon spectrum-Icon--sizeM"
              focusable="false"
              aria-hidden="true"
            ></iconify-icon>
            <span class="spectrum-SideNav-link-text">${tls}</span>
          </a>
          ${contains
            ? html`
                <ul class="spectrum-SideNav">
                  ${until(this.getSectionContents(), html`finding items`)}
                </ul>
              `
            : nothing}
        </li>
      `);
    });
    return templates;
  }

  protected render() {
    if (DEBUG) {
      console.log(`Nav render start`);
      console.log(`route is ${this.route}`);
    }
    if (
      this.route == undefined ||
      this.route.length == 0 ||
      !this.route.localeCompare("/")
    ) {
      return html`<div>no route</div>`;
    } else {
      const topSections = this.getTopLevels();

      return html`
        <nav>
          <ul class="spectrum-SideNav spectrum-SideNav--multiLevel">
            ${topSections}
          </ul>
        </nav>
      `;
    }
  }
}
