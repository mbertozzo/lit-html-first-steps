import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.querySelector('#root');

const avatar = url => html`
  <figure>
    <img src="${url}"
  </figure>
`;

const details = (username, email) => html`
  <p>
    Your username is <strong>${username}</strong> and your email is <strong>${email}</strong>.
  </p>
`;

const template = data => html`
  <article>
    ${avatar(data.picture.thumbnail)}
    <p>Hello <span style="text-transform: capitalize;">${data.name.first} ${data.name.last}!</span></p>
    ${details(data.login.username, data.email)}
    </article>
  `;

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  //.then(response => console.log(JSON.stringify(response)));
  .then(response => response.results[0])
  .then(response => render(template(response),root));