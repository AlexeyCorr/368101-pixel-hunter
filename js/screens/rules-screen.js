import Application from './../application';
import BackButtonView from './../Views/back-button-view';
import RulesView from './../views/rules-view';

class RulesScreen {
  constructor() {
    this.backButton = new BackButtonView();
    this.content = new RulesView();
    this.content.onClick = this.startGame.bind(this);

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

  startGame(playerName) {
    Application.showGame(playerName);
  }

}

export default RulesScreen;
