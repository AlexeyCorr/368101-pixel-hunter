import Application from './../application';
import ConfirmPopupView from './../views/confirm-popup-view';

class ConfirmPopupScreen {
  constructor() {
    this._confirnPopup = new ConfirmPopupView();
    this._confirnPopup.onCancel = this.onCancel;
    this._confirnPopup.onConfirm = this.onConfirm;
  }

  get element() {
    return this._confirnPopup.element;
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
