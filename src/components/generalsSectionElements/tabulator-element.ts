import {
  LitElement,
  html,
  css,
  unsafeCSS,
  type PropertyValues,
  type CSSResultArray,
  type TemplateResult,
} from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, ref, type Ref } from "lit/directives/ref.js";

import TabulatorSheet from "tabulator-tables/dist/css/tabulator.css" with { type: "css" };

import { Tabulator } from "tabulator-tables";

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

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    const tableDiv = this.tableDivRef.value!;
    const table = new Tabulator("tabulator-div", {
      height: 300,
      data: TabulatorElement.tabledata,
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

  static localSheet = css``;

  static styles = [TabulatorSheet, TabulatorElement.localSheet];

  public render() {
    return html` <div id="tabulator-div" ${ref(this.tableDivRef)}></div> `;
  }
}
