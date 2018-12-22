import BackButtonView from './../views/back-button-view';
import ResultView from './../views/result-view';

class ResultScreen {
  constructor(model) {
    this.backButton = new BackButtonView();
    this.content = new ResultView(model);

    this.header = document.createElement(`header`);
    this.header.classList.add(`header`);
    this.header.appendChild(this.backButton.element);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.header);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }
}

export default ResultScreen;
