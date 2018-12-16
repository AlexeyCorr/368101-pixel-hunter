import AbstractView from './../abstract-view';

class TimerView extends AbstractView {
  constructor({time = 0, blink = false} = {}) {
    super();

    this.time = time;
    this.blinging = blink;
  }

  get template() {
    return `<div class="game__timer ${this.blinging ? `game__timer--blink` : ``}">${this.time}</div>`;
  }
}

export default TimerView;
