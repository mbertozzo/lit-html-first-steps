import {html} from 'lit-html';
import styles from './../styles/headline.scss'

const arrow = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.613 297.613" style="enable-background:new 0 0 297.613 297.613;" xml:space="preserve" width="512px" height="512px">
    <g>
      <circle cx="15.279" cy="14.83" r="14.83" fill="#D80027"/>
      <circle cx="59.32" cy="59.769" r="14.83" fill="#D80027"/>
      <circle cx="59.32" cy="14.83" r="14.83" fill="#D80027"/>
      <circle cx="104.261" cy="59.769" r="14.83" fill="#D80027"/>
      <circle cx="104.261" cy="103.81" r="14.83" fill="#D80027"/>
      <circle cx="104.261" cy="14.83" r="14.83" fill="#D80027"/>
      <circle cx="148.302" cy="59.769" r="14.83" fill="#D80027"/>
      <circle cx="148.302" cy="103.81" r="14.83" fill="#D80027"/>
      <circle cx="148.302" cy="14.83" r="14.83" fill="#D80027"/>
      <circle cx="192.343" cy="59.769" r="14.83" fill="#D80027"/>
      <circle cx="192.343" cy="103.81" r="14.83" fill="#D80027"/>
      <circle cx="148.302" cy="147.852" r="14.83" fill="#D80027"/>
      <circle cx="192.343" cy="147.852" r="14.83" fill="#D80027"/>
      <circle cx="104.261" cy="192.79" r="14.831" fill="#D80027"/>
      <circle cx="148.302" cy="192.79" r="14.831" fill="#D80027"/>
      <circle cx="192.343" cy="192.79" r="14.831" fill="#D80027"/>
      <circle cx="59.32" cy="236.887" r="14.83" fill="#D80027"/>
      <circle cx="104.261" cy="236.887" r="14.83" fill="#D80027"/>
      <circle cx="148.302" cy="236.887" r="14.83" fill="#D80027"/>
      <circle cx="192.343" cy="236.887" r="14.83" fill="#D80027"/>
      <circle cx="238.238" cy="103.81" r="14.83" fill="#D80027"/>
      <circle cx="238.238" cy="147.852" r="14.83" fill="#D80027"/>
      <circle cx="238.238" cy="192.79" r="14.831" fill="#D80027"/>
      <circle cx="15.279" cy="282.782" r="14.831" fill="#D80027"/>
      <circle cx="59.32" cy="282.782" r="14.831" fill="#D80027"/>
      <circle cx="104.261" cy="282.782" r="14.831" fill="#D80027"/>
      <circle cx="148.302" cy="282.782" r="14.831" fill="#D80027"/>
      <circle cx="282.334" cy="147.852" r="14.83" fill="#D80027"/>
    </g>
  </svg>
`;

const parseDate = (str_date) => new Date(Date.parse(str_date));

const headline = (news) => html`
  <div class="${styles.headline}">
    <div>${arrow()}</div>
    <div>
      <a href="${news.url}">${news.title}</a>
      <span class="${styles.details}">Published on ${news.source.name} // ${parseDate(news.publishedAt)} </span>
    </div>
  </div>
`;

export {headline};