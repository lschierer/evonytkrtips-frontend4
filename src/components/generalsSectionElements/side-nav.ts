import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { until } from "lit/directives/until.js";

import { getContentByCollection } from "@greenwood/cli/src/data/client.js";

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
export default class SideNav extends LitElement {
  @property({ type: String, reflect: true })
  public route = "";

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
      return html`
        <li class="spectrum-SideNav-item">
          <a href="${si.route}" class="spectrum-SideNav-itemLink">
            <span class="spectrum-SideNav-link-text">${si.title}</span>
          </a>
        </li>
      `;
    });
  }

  protected createRenderRoot() {
    return this;
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
      const sectionItems = this.getSectionContents();
      return html`
        <div>
          <ul class="spectrum-SideNav spectrum-SideNav--multiLevel">
            ${until(sectionItems, html`finding items`)}
          </ul>
        </div>
      `;
    }
  }
}
