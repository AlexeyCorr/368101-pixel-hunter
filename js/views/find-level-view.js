import AbstractView from '../abstract-view';

class FindLevelView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content game__content--triple">
        ${[...this.level.answers].map((it, index) =>`<div class="game__option">
        <img src="${it.image.src || `http://placehold.it/304x455`}" alt="Option ${index}" width="304" height="455">
        </div>`).join(``)}
      </form>
    </section>`;
  }

  onAnswer() {

  }

  onImageLoad() {
  }

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
        it.classList.add(`game__option--selected`);
        this.onAnswer();
      });
    });
  }
}

export default FindLevelView;
