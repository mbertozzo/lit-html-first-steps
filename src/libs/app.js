
import pkg from './../../package.json';
import styles from './../styles/app.scss';
import {html, render} from 'lit-html';

import {fallback} from './../components/fallback.js';
import {header} from './../components/header.js';
import {headline} from '../components/headline.js';
import {NewsSource} from '../components/source.js'

const root = document.querySelector('#root');

const template = (data, news) => html`
  ${header(data)}
  <main class="${styles.container}">
    <news-source name="Top Headlines"></news-source>
    ${news.map(n => headline(n))}
  </main>
`;

const loggedUser = 'https://randomuser.me/api/';
const newsList = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY';

Promise.all([
  fetch(loggedUser).then(r => r.json()),
  fetch(newsList).then(r => r.json())
])
.then(responses => {
  console.log(responses[1].articles);
  render(template(responses[0].results[0], responses[1].articles), root)
})
.catch(e => {
  render(fallback(), root);
})

export { root, pkg };