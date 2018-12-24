import AbstractView from './../abstract-view';

class TimerView extends AbstractView {
  constructor({time = 0, blink = false} = {}) {
    super();

    this._time = time;
    this._blinging = blink;
  }

  get template() {
    return `<div class="game__timer ${this._blinging ? `game__timer--blink` : ``}">${this._time}</div>`;
  }
}

export default TimerView;
