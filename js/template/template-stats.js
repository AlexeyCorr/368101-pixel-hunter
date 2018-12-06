import {NUMBER_QUESTIONS} from './../data/constants';

const template = (stats) =>
  `<ul class="stats">
    ${stats.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
    ${new Array(NUMBER_QUESTIONS - stats.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`)
      .join(``)}
  </ul>`;

export default template;
