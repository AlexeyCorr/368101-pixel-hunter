import {render, showScreen} from './../util';
import {greetingScreen} from './../screens/index'

const ESC_KEYCODE = 27;

const template =
  `<section class="modal">
    <form class="modal__inner">
      <button class="modal__close" type="button">
        <span class="visually-hidden">Закрыть</span>
      </button>
      <h2 class="modal__title">Подтверждение</h2>
      <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal__button-wrapper">
        <button class="modal__btn modal__btn--confirm">Ок</button>
        <button class="modal__btn modal__btn--cancel">Отмена</button>
      </div>
    </form>
  </section>`;

const element = render(template);
const closeButton = element.querySelector(`.modal__close`);
const cancelButton = element.querySelector(`.modal__btn--cancel`);
const confirmButton = element.querySelector(`.modal__btn--confirm`);

const onPopupEscDown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    onPopupClose();
  }
};

const openConfirmPopup = () => {
  document.querySelector(`#main`).appendChild(element);
  document.addEventListener(`keydown`, onPopupEscDown);
};

const onPopupClose = () => {
  document.querySelector(`#main`).removeChild(element);
  document.removeEventListener(`keydown`, onPopupEscDown);
};

const onPopupConfirm = (evt) => {
  evt.preventDefault();
  showScreen(greetingScreen)
};

closeButton.addEventListener(`click`, onPopupClose);
cancelButton.addEventListener(`click`, onPopupClose);
confirmButton.addEventListener(`click`, onPopupConfirm);


export default openConfirmPopup;
