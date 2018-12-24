import BackButtonView from './../views/back-button-view';
import ResultView from './../views/result-view';

class ResultScreen {
  constructor(model) {
    const backButton = new BackButtonView();
    this._content = new ResultView(model);

    this.header = document.createElement(`header`);
    this.header.classList.add(`header`);
    this.header.appendChild(backButton.element);
    this._root = document.createElement(`div`);
    this._root.appendChild(this.header);
    this._root.appendChild(this._content.element);
  }

  get element() {
    return this._root;
  }
}

export default ResultScreen;
