import AbstractView from './../abstract-view';
import Application from './../application';

class ButtonBackView extends AbstractView {

  get template() {
    return `
      <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>`;
  }

  bind() {
    const returnButton = this.element.querySelector(`.back`);
    returnButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.showConfirmPopup();
    });
  }
}

export default ButtonBackView;