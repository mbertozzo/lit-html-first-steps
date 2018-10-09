
import pkg from './../../package.json';
import styles from './../styles/app.scss';
import {html, render} from 'lit-html';

import {avatar} from './../components/avatar.js';
import {details} from './../components/details.js';

const root = document.querySelector('#root');

const template = data => html`
  <main class="${styles.container}">
    ${avatar(data.picture.medium)}
    <p>Hello <span style="text-transform: capitalize;">${data.name.first} ${data.name.last}!</span></p>
    ${details(data.login.username, data.email)}
    </article>
  `;

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  //.then(response => console.log(JSON.stringify(response)));
  .then(response => response.results[0])
  .then(response => render(template(response),root));

//render(template,root);

export { root, pkg };