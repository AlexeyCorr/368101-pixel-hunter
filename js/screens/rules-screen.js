import Application from './../application';
import BackButtonView from './../views/back-button-view';
import RulesView from './../views/rules-view';

class RulesScreen {
  constructor() {
    const backButton = new BackButtonView();
    this._content = new RulesView();
    this._content.onClick = this.startGame.bind(this);

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

  startGame(playerName) {
    Application.showGame(playerName);
  }

}

export default RulesScreen;
