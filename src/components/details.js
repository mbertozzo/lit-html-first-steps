import styles from './../styles/app.scss';
import {html} from 'lit-html';

const details = (username, email) => html`
  <p>
    Your username is <span class="${styles.strong}">${username}</span> and your email is <span class="${styles.strong}">${email}</span>.
  </p>
`;

export {details};