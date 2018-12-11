import HeaderView from './../views/header-view';
import ResultView from './../views/result-view';

class ResultScreen {
  constructor(model) {
    this.header = new HeaderView(false);
    this.content = new ResultView(model);

    this.element = document.createElement(`div`);
    this.element.appendChild(this.header.element);
    this.element.appendChild(this.content.element);
  }

  get template() {
    return this.element;
  }
}

export default ResultScreen;
