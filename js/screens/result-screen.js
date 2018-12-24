import BackButtonView from './../views/back-button-view';
import ResultView from './../views/result-view';

class ResultScreen {
  constructor(model) {
    this.backButton = new BackButtonView();
    this.content = new ResultView(model);

    this.header = document.createElement(`header`);
    this.header.classList.add(`header`);
    this.header.appendChild(this.backButton.element);
    this._root = document.createElement(`div`);
    this._root.appendChild(this.header);
    this._root.appendChild(this.content.element);
  }

  get element() {
    return this._root;
  }
}

export default ResultScreen;
