import IntroView from './../views/intro-view';
import Application from './../application';

class IntroScreen {
  constructor() {
    this.intro = new IntroView();
    this.intro.onclick = this.onclick;
  }

  get element() {
    return this.intro.element;
  }

  onclick() {
    Application.showWelcome();
  }
}

export default IntroScreen;
