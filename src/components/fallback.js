import {html} from 'lit-html';
import styles from './../styles/fallback.scss';

const fallback = () => html`
  <div class="${styles.fallback}">
    <p>Something went wrong fetching data from the free services used to build this demo.</p>
    <p>Please, check if URLs are correct and if you specified a <strong>valid API KEY</strong> for the NewsApi service.</p>
  </div>
`;

export {fallback}