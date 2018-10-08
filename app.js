import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.querySelector('#root');

//.toLocaleDateString restituisce la data nel formato impostato per il browser
const date = () => new Date().toString();
const template = value => html`<h1>Oggi è il <span>${value}</span></h1>`;

setInterval(() => render( template(date()), root ), 1000);