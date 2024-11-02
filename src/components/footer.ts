export default class FooterComponent extends HTMLElement {
  // run some code to set HTML when the component is ready
  connectedCallback() {
    this.innerHTML = this.getTemplate();
  }

  // create templates that interpolate variables and HTML!
  getTemplate() {
    const year = new Date().getFullYear();

    return `
      <style>
        footer {
          background-color: var(--spectrum-cyan-800);
        }
        h4 {
          margin-left: 8px;
        }
      </style>

      <footer>
        <h4>Evony TKR Tips &copy;2023-${year}</h4>
      </footer>
    `;
  }
}

customElements.define("app-footer", FooterComponent);
