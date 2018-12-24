import AbstractView from './../abstract-view';
import {Limit} from './../data/game';

class StatsView extends AbstractView {
  constructor(state) {
    super();

    this._stats = state.stats;
  }

  get template() {
    return `
      <ul class="stats">
        ${this._stats.map((it) => `<li class="stats__result stats__result--${it}"></li>`)
          .join(``)}
        ${new Array(Limit.QUESTIONS - this._stats.length)
          .fill(`<li class="stats__result stats__result--unknown"></li>`)
          .join(``)}
      </ul>`;
  }
}

export default StatsView;
