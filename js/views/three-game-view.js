import AbstractView from '../abstract-view';

class OneGameView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content game__content--triple">
        <div class="game__option">
          <img src="${this.level.answers[0].image.src || `http://placehold.it/304x455`}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.level.answers[1].image.src || `http://placehold.it/304x455`}" alt="Option 2" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.level.answers[2].image.src || `http://placehold.it/304x455`}" alt="Option 3" width="304" height="455">
        </div>
      </form>
    </section>`;
  }

  onAnswer() {

  }

  bind() {
    const answerButton = this.element.querySelectorAll(`.game__option`);
    answerButton.forEach((it) => {
      it.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        it.classList.add(`game__option--selected`);
        this.onAnswer();
      });
    });
  }
}

export default OneGameView;
