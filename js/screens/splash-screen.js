import AbstractView from './../abstract-view';

class SplashScreen extends AbstractView {

  get template() {
    return `
    <div class="loader__wrapper">
      <span class="loader"></span>
    </div>`;
  }

  show() {
    document.body.appendChild(this.element);
  }
}

export default SplashScreen;
