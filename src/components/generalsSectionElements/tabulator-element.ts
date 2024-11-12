import {
  LitElement,
  html,
  css,
  unsafeCSS,
  type PropertyValues,
  type CSSResultArray,
  type TemplateResult,
} from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, ref, type Ref } from "lit/directives/ref.js";
import TabulatorCSS from "../../styles/tabulator.css" with { type: "css" };

import { Tabulator, AjaxModule } from "tabulator-tables";

import {
  type GeneralListSchema,
  type GeneralSchema,
  type BasicAttributesSummarySchema,
} from "../../lib/index.ts";

const DEBUG = true;
const DEBUGT = false;

@customElement("tabulator-element")
export default class TabulatorElement extends LitElement {
  private tableDivRef: Ref<HTMLDivElement> = createRef();

  @state()
  private table: Tabulator | null = null;

  protected override updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    if (this.table == null) {
      this.renderTable();
      if (this.table != null) {
        (this.table as Tabulator).on("tableBuilt", () => {
          if (DEBUG) {
            console.log(`TabulatorElement tableBuilt callback`);
          }
          this.table?.setData();
        });
      }
    }
  }

  private formatGeneralsResponse(
    url: string,
    params: any,
    response: GeneralListSchema[]
  ) {
    if (DEBUG) {
      console.log(`TabulatorElement formatGeneralsResponse function`);
    }
    const returnable = Array<GeneralSchema>();
    response.forEach((r) => {
      const type = r.type;
      r.members.forEach((m) => {
        if (m.id !== undefined) {
          returnable.push({
            name: m.name,
            id: m.id,
            type: type,
            ascending: false,
            basicAttributes: {
              attack: {
                total: 0,
              },
              defense: {
                total: 0,
              },
              leadership: {
                total: 0,
              },
              politics: {
                total: 0,
              },
            },
            builtInBook: "",
            specialities: [""],
          });
        }
      });
    });
  }

  private renderTable() {
    if (this.tableDivRef.value != undefined && this.tableDivRef.value != null) {
      const div = this.tableDivRef.value;

      if (this.table == null) {
        this.table = new Tabulator(div, {
          ajaxURL: "http://localhost:3000/generals.json",
          ajaxConfig: "GET",
          ajaxResponse: this.formatGeneralsResponse,
          progressiveLoad: "load",
          debugInvalidOptions: DEBUGT,
          debugEventsExternal: DEBUGT,
          columnHeaderSortMulti: true,
          columnDefaults: {
            tooltip: true, //show tool tips on cells
            headerHozAlign: "center",
          },
          layout: "fitDataTable",
          columns: [
            {
              title: "Name",
              field: "name",
              width: 250,
            },
            {
              title: "Type",
              field: "type",
            },
          ],
        });
      }
    }
  }

  static localSheet = css`
    :host {
      --headerMargin: 2;
      width: 90%;
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      grid-auto-flow: row;
      justify-content: start;
      align-content: start;
    }
    .tableContainer {
      grid-row-start: 2;
      grid-column-start: 1;
      grid-column-end: span 5;
      overflow-x: scroll;
      border-bottom: var(--spectrum-border-width-100) solid
        var(--sl-color-gray-5);
      border-right: var(--spectrum-border-width-100) solid
        var(--sl-color-gray-5);
      border-left: var(--spectrum-border-width-100) solid var(--sl-color-gray-5);
    }

    .tabulator {
      height: calc(var(--spectrum-component-height-500) * 5);
      font-size: var(--spectrum-global-dimension-font-size-25);
      width: 99%;
      .tabulator-header {
        .tabulator-header-contents {
          .tabulator-col,
          .tabulator-col-group {
            max-height: calc(
              var(--spectrum-table-section-header-row-height-medium) * 4
            );

            .tabulator-col-content {
              .tabulator-col-title-holder {
                width: 100%;
                display: flex;
                flex-direction: row;

                .tabulator-col-title {
                  white-space: normal;
                  width: 80%;
                }
              }
            }
          }
        }
      }
      .tabulator-row {
        display: flex;
      }
    }

    .tabulator .tabulator-header .tabulator-col .tabulator-col-content {
      padding: var(--spectrum-global-dimension-static-size-50);
    }

    .tabulator
      .tabulator-header
      .tabulator-col.tabulator-sortable
      .tabulator-col-title {
      padding-right: var(--spectrum-global-dimension-static-size-25);
    }
  `;

  static styles = [TabulatorCSS, TabulatorElement.localSheet];

  public render() {
    if (DEBUG) {
      console.log(`TabulatorElement render`);
    }
    return html`
      <div class="tableContainer">
        <div id="tabulator-div" ${ref(this.tableDivRef)}></div>
      </div>
    `;
  }
}
