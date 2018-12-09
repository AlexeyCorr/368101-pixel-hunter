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
      <form class="game__content game__content--wide">
        <div class="game__option">
          <img src="${this.level.answers[0].image.src || `http://placehold.it/705x455`}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="visually-hidden" name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
    </section>`;
  }

  onAnswer() {

  }

  bind() {
    const answerButton = this.element.querySelectorAll(`input[type=radio]`);
    const answers = new Set();
    answerButton.forEach((it) => {
      it.addEventListener(`change`, () => {
        if (it.checked) {
          answers.add(it.name);
          if ([...answers].length === (answerButton.length / 2)) {
            this.onAnswer();
          }
        }
      });
    });
  }


}

export default OneGameView;
