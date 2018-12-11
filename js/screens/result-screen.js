import AbstractView from '../abstract-view';
import {
  NUMBER_QUESTIONS,
  PointsAnwser
} from './../data/game';

class ResultScreen extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.state = this.model.state;
  }

  get template() {
    return `
      <header class="header">
      </header>
      <section class="result">
        <h2 class="result__title">${this.model.playerName} вы ${this.model.isDead() ? `проиграли!` : `победили!`}</h2>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2">
              <ul class="stats">
              ${this.state.stats.map((it) => `<li class="stats__result stats__result--${it}"></li>`)
                .join(``)}
              ${new Array(NUMBER_QUESTIONS - this.state.stats.length)
                .fill(`<li class="stats__result stats__result--unknown"></li>`)
                .join(``)}
              </ul>
            </td>
            <td class="result__points">× ${PointsAnwser.CORRECT}</td>
            <td class="result__total">${PointsAnwser.CORRECT * this.state.answers.filter(({isCorrect}) => isCorrect).length}</td>
          </tr>
          ${!this.model.isDead() ? `<tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${this.state.answers.filter(({time}) => time < 10).length} <span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">× ${PointsAnwser.FAST - PointsAnwser.CORRECT}</td>
            <td class="result__total">${(PointsAnwser.FAST - PointsAnwser.CORRECT) * this.state.answers.filter(({time}) => time < 10).length}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this.state.lives} <span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">× ${PointsAnwser.BONUS}</td>
            <td class="result__total">${PointsAnwser.BONUS * this.state.lives}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${this.state.answers.filter(({time}) => time > 20).length} <span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">× ${PointsAnwser.SLOW}</td>
            <td class="result__total">-${PointsAnwser.SLOW * this.state.answers.filter(({time}) => time > 20).length}</td>
          </tr>
          <tr>` : ``}
            <td colspan="5" class="result__total  result__total--final">${this.model.getSumPoints(this.state.answers, this.state.lives)}</td>
          </tr>
        </table>
      </section>`;
  }
}

export default ResultScreen;
