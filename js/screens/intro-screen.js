import IntroView from './../views/intro-view';
import Application from './../application';

class IntroScreen {
  constructor() {
    this._intro = new IntroView();
    this._intro.onclick = this.onclick;
  }

  get element() {
    return this._intro.element;
  }

  onclick() {
    Application.showWelcome();
  }
}

export default IntroScreen;
