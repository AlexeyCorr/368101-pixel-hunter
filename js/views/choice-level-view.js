import AbstractView from '../abstract-view';

class ChoiceLevelView extends AbstractView {
  constructor({level = {}, wide = false} = {}) {
    super();

    this.level = level;
    this.wide = wide;
  }

  get template() {
    return `
      <section class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content ${this.wide ? `game__content--wide` : ``}">
        ${[...this.level.answers].map((it, index) => `<div class="game__option" data-type="${it.type}">
          <img src="${it.image.url || `http://placehold.it/468x458`}" alt="Option ${index}" width="${it.image.width}" height="${it.image.height}">
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

    const form = this.element.querySelector(`.game__content`);
    const options = form.querySelectorAll(`.game__option`);

    form.addEventListener(`change`, () => {
      const answers = [];

      options.forEach((option) => {
        let type = option.dataset.type;
        let answerButtons = option.querySelectorAll(`input[type=radio]`);

        answerButtons.forEach((it) => {
          if (it.checked) {
            let value = it.value;
            answers.push(type === value);
          }
        });
      });
      if (answers.length === options.length) {
        const answer = !answers.includes(false);
        this.onAnswer(answer);
      }
    });
  }
}

export default ChoiceLevelView;
