import { customElement, property } from "lit/decorators.js";
import { getContentByCollection } from "@greenwood/cli/src/data/client.js";

import { CardGrid } from "./card-grid.ts";

import { type Page, sortPages } from "../lib/greenwoodPages.ts";
import type { PropertyValues } from "lit";
import { type CardDetails } from "./card-grid.ts";
const DEBUG = true;

@customElement("collection-cardgrid")
export default class ColletionCardGrid extends CardGrid {
  @property({ type: String, reflect: true })
  public collection: String = "";

  constructor() {
    super();

    if (this.collection.length > 0) {
      this.updateSections();
    } else {
      if (DEBUG) {
        console.log(`Collection '${this.collection}' is empty at construction`);
      }
    }
  }

  protected async willUpdate(_changedProperties: PropertyValues): void {
    super.willUpdate(_changedProperties);
    if (_changedProperties.has("collection")) {
      await this.updateSections();
    }
  }

  private async updateSections() {
    if (DEBUG) {
      console.log(`ColletionCardGrid updateSections start`);
    }
    if (this.collection.length > 0) {
      const collectionData: Page[] = (
        await getContentByCollection(this.collection)
      ).sort((a: Page, b: Page) => sortPages(a, b));

      if (collectionData.length > 0) {
        this.gridCards = new Array<CardDetails>();
        collectionData.map((page) => {
          if (DEBUG) {
            console.log(`card with title ${page.title}, route ${page.route}`);
          }
          this.gridCards.push({
            title: (page.title as string) ?? page.label.replace("-", " "),
            target: page.route as string,
            description: (page.data!.description as string) ?? "",
            name: "dashicons:text-page",
          });
        });
        this.requestUpdate("gridsections");
      } else {
        console.log(
          `Collection '${this.collection}' is empty in updateSections`
        );
      }
    } else {
      if (DEBUG) {
        console.log(
          `collection is undefined in ColletionCardGrid updateSections`
        );
      }
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.updateSections();
  }
}
