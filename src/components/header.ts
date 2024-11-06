export const isolation = true;
export const hydration = true;
export const prerender = true;

export default class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    const style = `
      <style>
        .header {
          background-color: var(--spectrum-cyan-800);
          min-height: 30px;
          padding: 10px;
          font-size: 1.2rem;
          width: 100;
        }

        .head-wrap {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .brand {
          justify-items: left;
          padding: 10px;
        }

        .brand img {
          float:left;
          height: 90;
          width: 100;
        }

        .header .social {
          margin-left:auto;
          text-align: right;
        }

        .nav {
          width: 100;
          height: 100;
          flex-grow: 4;
          display: flex;
          justify-items: stretch;
          align-content: space-evenly;
          flex-wrap: wrap;
        }

        .nav-item {
          height: 100;
          flex-grow: 1;
          flex-shrink: 1;
        }

      </style>
      `;
    const sections = ["Generals", "Monsters"];
    return `${style}
      <header class="header">
        <div class="head-wrap">
          <div class="brand">
            <a href="/">
              <img src="/assets/Logo.svg" alt="EvonyTKRTips logo"/>
            </a>
          </div>
          <div class="nav">
            ${sections
              .map((section) => {
                return `
                <div class="nav-item">
                  <a href="/${section.toLowerCase().replaceAll(" ", "-")}/">
                    <span>${section}</span>
                  </a>
                </div>
              `;
              })
              .join("")}
          </div>
          <div class="social">
            <a href="https://github.com/lschierer/evonytkrtips-frontend">
              <iconify-icon icon="mdi:github" width="2rem" height="2rem"></iconify-icon>
            </a>
          </div>
        </div>
      </header>
    `;
  }
}
customElements.define("app-header", HeaderComponent);
