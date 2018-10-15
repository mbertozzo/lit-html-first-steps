import { render, html } from './node_modules/lit-html/lit-html.js';

export class SamplePage extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    console.log(this.location); //vaading-router adds a "location" object to the component
    const str = this.location.pathname === '/' ? 'Home' : this.location.params.title; 
    const title = this.getAttribute('title') || str;
    
    const template = () => html`
      <article>
        <h3 style="text-transform: capitalize;">${title}</h3>
        <p>Some very interesting content...</p>
      </article>
    `;

    render(template(), this); //"this" is a reference to current component (rendering happens inside of it)
  }

}

customElements.define('sample-page', SamplePage);