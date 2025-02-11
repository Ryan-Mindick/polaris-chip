import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://via.placeholder.com/150";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
    <div>
      <img src="${this.image}" alt="${this.title}"/>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
