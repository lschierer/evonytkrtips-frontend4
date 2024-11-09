import { LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import SpectrumTokens from "/node_modules/@spectrum-css/tokens/dist/index.css" with { type: "css" };

import SpectrumTypography from "/node_modules/@spectrum-css/typography/dist/index.css" with { type: "css" };

import BaseTheme from "../../styles/theme.css" with { type: "css" };

@customElement("spectrum-element")
export default class SpectrumElement extends LitElement {
  static styles =
    super.styles !== undefined && Array.isArray(super.styles)
      ? [
          ...super.styles,
          unsafeCSS(SpectrumTokens),
          unsafeCSS(SpectrumTypography),
          unsafeCSS(BaseTheme),
        ]
      : [
          unsafeCSS(SpectrumTokens),
          unsafeCSS(SpectrumTypography),
          unsafeCSS(BaseTheme),
        ];
}
