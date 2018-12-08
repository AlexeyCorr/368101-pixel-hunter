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
      <form class="game__content game__content--wide">
        <div class="game__option">
          <img src="${this.level.options[0].src || `http://placehold.it/705x455`}" alt="Option ${this.level.options[0].index}" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question${this.level.options[0].index}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="visually-hidden" name="question${this.level.options[0].index}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      (STATS)
    </section>`;
  }
}

export default OneGameView;
