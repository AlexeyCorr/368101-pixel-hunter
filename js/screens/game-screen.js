import HeaderView from './../views/header-view';
import OneGameView from './../views/one-game-view';
import TwoGameView from './../views/two-game-view';
import ThreeGameView from './../views/three-game-view';
import StatsView from './../views/stats-view';
import Application from './../application';
import StatsScreen from './stats-screen';

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    switch (this.model.getCurrentLevel().type) {
      case `oneImage`:
        this.gameContent = new OneGameView(this.model.getCurrentLevel());
        break;
      case `twoImages`:
        this.gameContent = new TwoGameView(this.model.getCurrentLevel());
        break;
      case `threeImages`:
        this.gameContent = new ThreeGameView(this.model.getCurrentLevel());
        break;
      default:
        throw new Error(`Unknown type: ${this.model.getCurrentLevel().type}`);
    }
    this.stats = new StatsView(this.model.state);

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.gameContent.element);
    this.root.appendChild(this.stats.element);

    this._interval = null;
  }

  get element() {
    return this.root;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this.changeLevel();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  answer() {

  }

  exit() {
    Application.showStats();
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  levelView(level) {
    switch (level.type) {
      case `oneImage`:
        return new OneGameView(level);
      case `twoImages`:
        return new TwoGameView(level);
      case `threeImages`:
        return new ThreeGameView(level);
      default:
        throw new Error(`Unknown type: ${level.type}`);
    }
  }

  changeLevel() {
    this.updateHeader();
    const level = this.levelView(this.model.getCurrentLevel());
    level.onAnswer = this.answer();
    this.changeContentView(level);
  }

  endGame() {
    const stats = new StatsScreen();
    stats.onRestart = this.restart.bind(this);
    stats.onExit = this.exit.bind(this);

    Application.showStats();
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.gameContent.element);
    this.gameContent = view;
  }

}

export default GameScreen;
