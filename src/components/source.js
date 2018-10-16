import { html, render } from 'lit-html';

export class NewsSource extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const sourceName = this.getAttribute('name') || 'Not specified';
    
    const template = () => html`
      <div><p style="margin: 20px 0;">${sourceName}</p></div>
    `;

    render(template(), this);
  }
}

customElements.define('news-source', NewsSource);