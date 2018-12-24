import AbstractView from './../abstract-view';
import {Limit} from './../data/game';

class LivesView extends AbstractView {
  constructor(state) {
    super();

    this._state = state;
  }

  get template() {
    return `<div class="game__lives">
    ${new Array(Limit.LIVES - this._state.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Missed Life" width="31" height="27">`)
      .join(``)}
    ${new Array(this._state.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
    </div>`;
  }
}

export default LivesView;
