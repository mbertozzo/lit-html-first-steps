import styles from './../styles/app.scss';
import {html} from 'lit-html';

const avatar = url => html`
  <img src="${url}" class="${styles.avatar}">
`;

export {avatar};