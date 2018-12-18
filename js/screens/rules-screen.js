import Application from './../application';
import ButtonBackView from './../views/button-back-view';
import RulesView from './../views/rules-view';

class RulesScreen {
  constructor() {
    this.buttonBack = new ButtonBackView();
    this.content = new RulesView();
    this.content.onClick = this.startGame.bind(this);

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

  startGame(playerName) {
    this.content.onClick = Application.showGame(playerName);
  }

}

export default RulesScreen;
