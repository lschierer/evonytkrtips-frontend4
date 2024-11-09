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

import { Tabulator } from "tabulator-tables";

const DEBUG = true;
const DEBUGT = false;

@customElement("tabulator-element")
export default class TabulatorElement extends LitElement {
  private tableDivRef: Ref<HTMLDivElement> = createRef();

  static tabledata = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    {
      id: 3,
      name: "Christine Lobowski",
      age: "42",
      col: "green",
      dob: "22/05/1982",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "125",
      col: "orange",
      dob: "01/08/1980",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "16",
      col: "yellow",
      dob: "31/01/1999",
    },
  ];

  @state()
  private table: Tabulator | null = null;

  private renderTable() {
    if (this.tableDivRef.value != undefined && this.tableDivRef.value != null) {
      const div = this.tableDivRef.value;

      if (this.table == null) {
        this.table = new Tabulator(div, {
          data: TabulatorElement.tabledata,
          debugInvalidOptions: DEBUGT,
          debugEventsExternal: DEBUGT,
          columnHeaderSortMulti: true,
          columnDefaults: {
            tooltip: true, //show tool tips on cells
            headerHozAlign: "center",
          },
          layout: "fitColumns",
          columns: [
            {
              title: "id",
              field: "id",
            },
            {
              title: "Name",
              field: "name",
            },
          ],
        });
      }
    }
  }
  protected override updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    if (this.table == null) {
      this.renderTable();
    }
  }

  static localSheet = css`
    :host {
      --headerMargin: 2;
      width: 100%;
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      grid-auto-flow: row;
      justify-items: stretch;
      align-items: stretch;
      justify-content: start;
      align-content: start;
    }
    .tableContainer {
      grid-row-start: 2;
      grid-column-start: 1;
      grid-column-end: span 5;
      overflow-x: hidden;
      border-bottom: var(--spectrum-border-width-100) solid
        var(--sl-color-gray-5);
      border-right: var(--spectrum-border-width-100) solid
        var(--sl-color-gray-5);
      border-left: var(--spectrum-border-width-100) solid var(--sl-color-gray-5);
    }

    .tabulator {
      height: calc(var(--spectrum-component-height-500) * 5);
      font-size: var(--spectrum-global-dimension-font-size-25);
      width: 100%;
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
