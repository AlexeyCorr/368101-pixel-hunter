import WelcomView from './../views/welcome-view';
import Application from './../application';

class WelcomScreen {
  constructor() {
    this.welcomeView = new WelcomView();
    this.welcomeView.onClick = this.onClick;
  }

  get element() {
    return this.welcomeView.element;
  }

  onClick() {
    Application.showRules();
  }
}

export default WelcomScreen;
