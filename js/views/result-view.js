import AbstractView from './../abstract-view';
import {
  Limit,
  PointsAnwser,
  sumPoints
} from './../data/game';

class ResultView extends AbstractView {
  constructor(model) {
    super();

    this._game = model;
  }

  get template() {
    return `
      <section class="result">
        <h2 class="result__title">${this._game[this._game.length - 1].playerName} вы ${this._game[this._game.length - 1]._state.lives === 0 ? `проиграли!` : `победили!`}</h2>
        ${this._game.reverse().map((game, index) => `
        <table class="result__table">
          <tr>
            <td class="result__number">${index + 1}.</td>
            <td colspan="2">
              <ul class="stats">
              ${game._state.stats.map((it) => `<li class="stats__result stats__result--${it}"></li>`)
                .join(``)}
              ${new Array(Limit.QUESTIONS - game._state.stats.length)
                .fill(`<li class="stats__result stats__result--unknown"></li>`)
                .join(``)}
              </ul>
            </td>
            <td class="result__points">× ${PointsAnwser.CORRECT}</td>
            <td class="result__total">${PointsAnwser.CORRECT * game._state.answers.filter(({isCorrect}) => isCorrect).length}</td>
          </tr>
          ${game._state.lives !== 0 ? `<tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${game._state.answers.filter(({time}) => time < 10).length} <span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">× ${PointsAnwser.FAST - PointsAnwser.CORRECT}</td>
            <td class="result__total">${(PointsAnwser.FAST - PointsAnwser.CORRECT) * game._state.answers.filter(({time}) => time < 10).length}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${game._state.lives} <span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">× ${PointsAnwser.BONUS}</td>
            <td class="result__total">${PointsAnwser.BONUS * game._state.lives}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${game._state.answers.filter(({time}) => time > 20).length} <span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">× ${PointsAnwser.SLOW}</td>
            <td class="result__total">-${PointsAnwser.SLOW * game._state.answers.filter(({time}) => time > 20).length}</td>
          </tr>
          <tr>` : ``}
            <td>${new Intl.DateTimeFormat(`ru-RU`).format(new Date(game.date))}</td>
            <td colspan="5" class="result__total  result__total--final">${sumPoints(game._state.answers, game._state.lives)}</td>
          </tr>
        </table>`).join(``)}
      </section>`;
  }
}

export default ResultView;
