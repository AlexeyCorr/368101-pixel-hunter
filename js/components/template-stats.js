import {NUMBER_QUESTIONS} from './../data/constants';

const template = (state) =>
  `<ul class="stats">
    ${state.answerStats.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
    ${new Array(NUMBER_QUESTIONS - state.answerStats.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`)
      .join(``)}
  </ul>`;

export default template;
