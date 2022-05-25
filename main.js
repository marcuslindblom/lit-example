import { LitElement, html } from "https://cdn.skypack.dev/lit@2.2.4";
import { Router } from "https://cdn.skypack.dev/@lit-labs/router@0.0.2";


class One extends LitElement {
  render() {
    return html`<h1>Hello</h1><a href="/world">World</a>`;
  }
}

customElements.define("view-one", One);

class Two extends LitElement {
  render() {
    return html`<h1>World</h1><a href="/">Back</a>`;
  }
}

customElements.define('view-two', Two);

class App extends LitElement {
  router = new Router(this, [
    {
      path: '/',
      render: () => html`<view-one></view-one>`,
    },
    {
      path: '/world',
      render: () => html`<view-two></view-two>`,      
    }
  ]);
  render() {
    return html`${this.router.outlet()}`;
  }
}

customElements.define('view-app', App);
