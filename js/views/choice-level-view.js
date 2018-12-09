import AbstractView from '../abstract-view';

class ChoiceLevelView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content ${this.level.className}">
        ${[...this.level.answers].map((it, index) => `<div class="game__option">
          <img src="${it.image.src || `http://placehold.it/468x458`}" alt="Option ${index}" width="${it.image.width}" height="${it.image.height}">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="question${index}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="question${index}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
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

export default ChoiceLevelView;
