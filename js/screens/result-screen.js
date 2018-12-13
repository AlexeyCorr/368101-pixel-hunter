import ButtonBackView from './../views/button-back-view';
import ResultView from './../views/result-view';

class ResultScreen {
  constructor(model) {
    this.buttonBack = new ButtonBackView();
    this.content = new ResultView(model);

    this.header = document.createElement(`header`);
    this.header.classList.add(`header`);
    this.header.appendChild(this.buttonBack.element);
    this.element = document.createElement(`div`);
    this.element.appendChild(this.header);
    this.element.appendChild(this.content.element);
  }

  get template() {
    return this.element;
  }
}

export default ResultScreen;
