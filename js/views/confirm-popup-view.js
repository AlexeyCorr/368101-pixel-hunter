import AbstractView from '../abstract-view';

class ConfirmPopupView extends AbstractView {

  get template() {
    return `
      <section class="modal">
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
  }

  onCancel() {}

  onConfirm() {}

  onPressKey() {}

  bind() {
    const closeButton = this.element.querySelector(`.modal__close`);
    const cancelButton = this.element.querySelector(`.modal__btn--cancel`);
    const confirmButton = this.element.querySelector(`.modal__btn--confirm`);

    document.addEventListener(`keydown`, (evt) => {
      this.onPressKey(evt);
    });
    closeButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onCancel();
    });
    cancelButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onCancel();
    });
    confirmButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onConfirm();
      this.onCancel();
    });
  }
}

export default ConfirmPopupView;
