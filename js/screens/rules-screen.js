import Application from './../application';
import HeaderView from './../views/header-view';
import RulesView from './../views/rules-view';

class RulesScreen {
  constructor() {
    this.header = new HeaderView(false);
    this.content = new RulesView();

    this.content.onClick = this.gameStart.bind(this);
    this.element = document.createElement(`div`);
    this.element.appendChild(this.header.element);
    this.element.appendChild(this.content.element);
  }

  get template() {
    return this.element;
  }

  gameStart(playerName) {
    this.content.onClick = Application.showGame(playerName);
  }

}

export default RulesScreen;
