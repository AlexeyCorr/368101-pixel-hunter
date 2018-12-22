import Application from './../application';
import ConfirmPopupView from './../views/confirm-popup-view';

class ConfirmPopupScreen {
  constructor() {
    this.confirnPopup = new ConfirmPopupView();
    this.confirnPopup.onCancel = this.onCancel;
    this.confirnPopup.onConfirm = this.onConfirm;
  }

  get element() {
    return this.confirnPopup.element;
  }

  show() {
    document.body.appendChild(this.element);
  }

  onCancel() {
    this.element.remove();
  }

  onConfirm() {
    Application.showWelcome();
  }
}

export default ConfirmPopupScreen;
