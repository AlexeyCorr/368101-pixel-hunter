import AbstractView from './../abstract-view';
import Application from './../application';
import {MAX_LIVES} from './../data/game';

class HeaderView extends AbstractView {
  constructor(isGame, state = ``) {
    super();
    this.state = state;
    this.isGame = isGame;
  }

  get template() {
    return `
      <header class="header">
        <button class="back">
          <span class="visually-hidden">Вернуться к началу</span>
          <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
            <use xlink:href="img/sprite.svg#arrow-left"></use>
          </svg>
          <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
            <use xlink:href="img/sprite.svg#logo-small"></use>
          </svg>
        </button>
        ${this.isGame ? `<div class="game__timer">${this.state.time}</div>
        <div class="game__lives">
        ${new Array(MAX_LIVES - this.state.lives)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Missed Life" width="31" height="27">`)
          .join(``)}
        ${new Array(this.state.lives)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
          .join(``)}
        </div>` : ``}
      </header>`;
  }

  bind() {
    const returnButton = this.element.querySelector(`.back`);
    returnButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.showConfirmPopup();
    });
  }
}

export default HeaderView;
