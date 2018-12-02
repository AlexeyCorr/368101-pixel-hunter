import {render} from './../util';
import {InitialGame} from './../data/constants';
import {answerStats} from './../data/data';

const answerTemplate = `<ul class="stats">
  ${answerStats.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`
  ).join(``)}
  ${new Array(InitialGame.QUESTIONS - answerStats.length)
    .fill(`<li class="stats__result stats__result--unknown"></li>`)
    .join(``)}
  </ul>`;

const element = render(answerTemplate);

export default element;
