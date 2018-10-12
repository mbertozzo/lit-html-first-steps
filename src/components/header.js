import styles from './../styles/header.scss';
import {html} from 'lit-html';

import {avatar} from './avatar.js';

const header = (data) => html`
  <header class="${styles.header}">
    <h1>News Feed</h1>
    <div class="${styles.user}">
      ${avatar(data.picture.medium)}
      <p>Welcome, <span>${data.name.first} ${data.name.last}</span>.</p>
    </div>
  </header>
`;

export {header};