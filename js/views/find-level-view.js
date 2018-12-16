import AbstractView from '../abstract-view';
import {isDebug, DebugStyle} from './../settings';

class FindLevelView extends AbstractView {
  constructor({game = {}, isCorrect = ``} = {}) {
    super();

    this.level = game;
    this.isCorrect = isCorrect;
  }

  get template() {
    return `
      <section class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content game__content--triple">
        ${[...this.level.answers].map((it, index) =>`<div class="game__option" style="${isDebug(it.type, this.isCorrect) ? DebugStyle.BORDER : ``}" data-type="${it.type}">
        <img src="${it.image.url || `http://placehold.it/304x455`}" alt="Option ${index}" width="304" height="455">
        </div>`).join(``)}
      </form>
    </section>`;
  }

  onAnswer() {}

  onImageLoad() {}

  bind() {
    const images = this.element.querySelectorAll(`.game__option > img`);
    images.forEach((image) => {
      image.addEventListener(`load`, () => {
        this.onImageLoad(image);
      });
    });

    const answerButton = this.element.querySelectorAll(`.game__option`);
    answerButton.forEach((it) => {
      it.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const answer = it.dataset.type === this.isCorrect;
        it.classList.add(`game__option--selected`);
        this.onAnswer(answer);
      });
    });
  }
}

export default FindLevelView;
