import AbstractView from './../abstract-view';
import {isDebug, debugStyle} from './../settings';

class FindLevelView extends AbstractView {
  constructor({game = {}, isCorrect = ``, images = []} = {}) {
    super();

    this._level = game;
    this._isCorrect = isCorrect;
    this._images = images;
  }

  get template() {
    return `
      <section class="game">
      <p class="game__task">${this._level.question}</p>
      <form class="game__content game__content--triple">
        ${[...this._level.answers].map((it) =>`<div class="game__option" style="${isDebug(it.type, this._isCorrect) ? debugStyle : ``}" data-type="${it.type}">
        </div>`).join(``)}
      </form>
    </section>`;
  }

  bind() {
    const options = this.element.querySelectorAll(`.game__option`);
    options.forEach((option, index) => {

      this.onInsertImages(option, index, this._images);

      option.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const answer = option.dataset.type === this._isCorrect;
        option.classList.add(`game__option--selected`);
        this.onAnswer(answer);
      });
    });
  }

  onAnswer() {}

  onInsertImages() {}
}

export default FindLevelView;
