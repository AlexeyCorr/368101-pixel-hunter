import AbstractView from '../abstract-view';

class OneGameView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="game">
      <p class="game__task">${this.level.description}</p>
      <form class="game__content game__content--triple">
        <div class="game__option">
          <img src="${this.level.options[0].src || `http://placehold.it/304x455`}" alt="Option ${this.level.options[0].index}" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.level.options[1].index || `http://placehold.it/304x455`}" alt="Option ${this.level.options[1].index}" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.level.options[2].index || `http://placehold.it/304x455`}" alt="Option ${this.level.options[2].index}" width="304" height="455">
        </div>
      </form>
      (STATS)
    </section>`;
  }
}

export default OneGameView;
