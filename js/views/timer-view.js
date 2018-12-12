import AbstractView from './../abstract-view';

class TimerView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `<div class="game__timer">${this.state.time}</div>`;
  }
}

export default TimerView;
