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
    this.image = "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3929630.png&w=350&h=254";
    this.link = "https://hax.psu.edu/";
    this.description = "";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;

        .button {
          padding: 6px;
          border-radius: 20px;
          width: 100px;
          font-family: Comic Sans MS;
        }

        .card {
          background-color: #45a717;
          padding: 4px;
          width: 350px;
          height: 475px;
          border-radius: 20px;
          margin: 10px
        }

        .h1 {
          font-size: 20px;
          font-family: Comic Sans MS;
        }

        .h2 {
          font-size: 15px;
          font-family: Comic Sans MS;
        }
      }
    `;
  }

  render() {
    return html`
      <div id="cardlist">
        <div class="card">
          <h1>${this.title}</h1> 
          <h1>Philadelphia Eagles</h1>
            <img src="${this.image}" alt="${this.title}"/>
          <h2>${this.description}</h2>
            <button>
              <a class="button" href="https://hax.psu.edu/">Details</a>   
            </button>
        </div>
      </div>`;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      link: { type: String },
      description: { type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);


//:host ([fancy]) .card {
//  background-color: blue;
//  color: white;