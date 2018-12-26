import AbstractView from './../abstract-view';
import {isDebug, debugStyle} from './../settings';

class ChoiceLevelView extends AbstractView {
  constructor({game = {}, wide = false, images = []} = {}) {
    super();

    this._level = game;
    this._wide = wide;
    this._images = images;
  }

  get template() {
    return `
      <section class="game">
      <p class="game__task">${this._level.question}</p>
      <form class="game__content ${this._wide ? `game__content--wide` : ``}">
        ${[...this._level.answers].map((it, index) => `<div class="game__option" data-type="${it.type}">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="question${index + 1}" type="radio" value="photo">
            <span style="${isDebug(it.type, `photo`) ? debugStyle : ``}">Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="question${index + 1}" type="radio" value="painting">
            <span style="${isDebug(it.type, `painting`) ? debugStyle : ``}">Рисунок</span>
          </label>
        </div>`).join(``)}
      </form>
    </section>`;
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    const options = form.querySelectorAll(`.game__option`);

    options.forEach((option, index) => {
      this.onInsertImages(option, index, this._images);
    });

    form.addEventListener(`change`, () => {
      const answers = [];

      options.forEach((option) => {
        const type = option.dataset.type;
        const answerButtons = option.querySelectorAll(`input[type=radio]`);

        answerButtons.forEach((it) => {
          if (it.checked) {
            const value = it.value;
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

  onAnswer() {}

  onInsertImages() {}
}

export default ChoiceLevelView;
