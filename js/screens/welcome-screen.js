import WelcomView from './../views/welcome-view';
import Application from './../application';

class WelcomScreen {
  constructor() {
    this._welcomeView = new WelcomView();
    this._welcomeView.onClick = this.onClick;
  }

  get element() {
    return this._welcomeView.element;
  }

  onClick() {
    Application.showRules();
  }
}

export default WelcomScreen;
