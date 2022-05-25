import { LitElement, html } from "https://cdn.skypack.dev/lit@2.2.4";
import { Router } from "https://cdn.skypack.dev/@lit-labs/router@0.0.2";


class Home extends LitElement {
  render() {
    return html`<h1>Hello</h1><a href="/">Home</a> <a href="/about">About</a> <a href="/contact">Contact</a>`;
  }
}

customElements.define("home-index", Home);

class About extends LitElement {
  render() {
    return html`<h1>About</h1><a href="/">Home</a> <a href="/about">About</a> <a href="/contact">Contact</a>`;
  }
}

customElements.define('about-index', About);

class Contact extends LitElement {
  render() {
    return html`<h1>Contact</h1><a href="/">Home</a> <a href="/about">About</a> <a href="/contact">Contact</a>`;
  }
}

customElements.define('contact-index', Contact);

class App extends LitElement {
  router = new Router(this, [
    {
      path: '/',
      render: () => html`<home-index></home-index>`,
    },
    {
      path: '/about',
      render: () => html`<about-index></about-index>`,      
    },
    {
      path: '/contact',
      render: () => html`<contact-index></contact-index>`,      
    }    
  ]);
  render() {
    return html`${this.router.outlet()}`;
  }
}

customElements.define('my-app', App);
