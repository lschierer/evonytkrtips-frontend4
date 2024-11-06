import { LitElement, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";

const DEBUG = 1;

export const isolation = true;
export const hydration = true;
export const prerender = false;

@customElement("horizontal-card")
export default class HorizontalCard extends LitElement {
  @property({ type: String })
  public title: string = "";

  @property({ type: String })
  public description: string = "";

  @property({ type: String })
  public iconName: string = "";

  @property({ type: String })
  public iconWidth: string = "";

  @property({ type: String })
  public iconHeight: string = "";

  @state()
  private _targetUrl = "/";

  constructor() {
    super();
    if (this.title.length > 0) {
      const target = this.title.toLowerCase().replaceAll(" ", "-");
      this._targetUrl = `/${target}/`;
    }

    if (DEBUG) {
      console.log(
        `_targetUrl from constructor is ${this._targetUrl.toString()}`,
      );
    }
  }
  protected override willUpdate(_changedProperties: PropertyValues): void {
    if (DEBUG) {
      console.log(`willupdate start`);
      console.log(`_changedProperties has ${Object.keys(_changedProperties)}`);
      console.log(`title is ${this.title}`);
    }
    if (
      _changedProperties.has("title") ||
      this.title.length > this._targetUrl.length
    ) {
      const target = this.title.toLowerCase().replaceAll(" ", "-");
      this._targetUrl = `/${target}/`;
      if (DEBUG) {
        console.log(`_targetUrl is ${this._targetUrl}`);
      }
    }
  }
}
