import AbstractView from './../abstract-view';
import {MAX_LIVES} from './../data/game';

class LivesView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `<div class="game__lives">
    ${new Array(MAX_LIVES - this.state.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Missed Life" width="31" height="27">`)
      .join(``)}
    ${new Array(this.state.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
    </div>`;
  }
}

export default LivesView;
