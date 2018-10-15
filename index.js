import { render, html } from './node_modules/lit-html/lit-html.js';
import { Router } from './node_modules/@vaadin/router/dist/vaadin-router.js'
import { SamplePage } from './page.js';

const root = document.querySelector('#root');

const hello = () => html`
  <main>
    <h1>Welcome!</h1>
    <ul>
      <li><a href="/page/tizio">page Tizio</a></li>
      <li><a href="/page/caio">page Caio</a></li>
    </ul>
    <div class="outlet"></div>
  </main>
`;

render(hello(), root);

const outlet = document.querySelector('.outlet');
const router = new Router(outlet);

router.setRoutes([
  {path: '/',     component: 'sample-page'},
  {path: '/page/:title',  component: 'sample-page'},
]);