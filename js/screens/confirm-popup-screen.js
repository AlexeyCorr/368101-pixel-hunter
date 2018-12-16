import Application from './../application';
import ConfirmPopupView from './../views/confirm-popup-view';

const ESC_KEYCODE = 27;

class ConfirmPopupScreen {
  constructor() {
    this.confirnPopup = new ConfirmPopupView();
    this.confirnPopup.onCancel = this.onCancel;
    this.confirnPopup.onConfirm = this.onConfirm;
    this.confirnPopup.onPressKey = this.onPressKey;
  }

  get element() {
    return this.confirnPopup.element;
  }

  onCancel() {
    Application.hideConfirmPopup();
  }

  onConfirm() {
    Application.showWelcome();
  }

  onPressKey(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      this.onCancel();
    }
  }
}

export default ConfirmPopupScreen;
