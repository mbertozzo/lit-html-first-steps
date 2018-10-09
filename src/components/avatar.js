import styles from './../styles/app.scss';
import {html} from 'lit-html';

const avatar = url => html`
  <figure>
    <img src="${url}" class="${styles.avatar}">
  </figure>
`;

export {avatar};