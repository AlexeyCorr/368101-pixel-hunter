import HeaderView from './../views/header-view';
import ChoiceLevelView from './../views/choice-level-view';
import FindLevelView from './../views/find-level-view';
import StatsView from './../views/stats-view';
import Application from './../application';
import {InitialGame} from './../data/game';

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.gameContent = this.getGameView(this.model.getCurrentLevel());
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

  onAnswer(answer) {
    this.stopGame();
    const result = {
      isCorrect: answer,
      time: InitialGame.time - this.model.state.time
    };
    if (!result.isCorrect) {
      this.model.die();
    }
    let stat = this.model.getStats(result);
    this.model.state.stats.push(stat);
    this.model.state.answers.push(result);
    this.updateStats();
    if (this.model.hasNextLevel() && !this.model.isDead()) {
      this.model.nextLevel();
      this.startGame();
      this.changeLevel();
    } else {
      this.endGame();
    }
    this.model.state.time = 30;
  }

  imageResize(image) {
    const frame = {
      width: image.parentNode.clientWidth,
      height: image.parentNode.clientHeight
    };
    const given = {
      width: image.naturalWidth,
      height: image.naturalHeight
    };
    const optimizedSize = this.model.imageResize(frame, given);

    image.width = optimizedSize.width;
    image.height = optimizedSize.height;
  }

  getGameView(level) {
    const type = level.type;

    const gameView = {
      oneImage: new ChoiceLevelView(level),
      twoImages: new ChoiceLevelView(level),
      threeImages: new FindLevelView(level)
    };

    const view = gameView[type];

    view.onAnswer = this.onAnswer.bind(this);
    view.onImageLoad = this.imageResize.bind(this);

    return view;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this._interval = setInterval(() => {
      this.model.tick();
      if (this.model.state.time === 0) {
        this.onAnswer(false);
      }
      this.updateHeader();
    }, 1000);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  updateStats() {
    const stats = new StatsView(this.model.state);
    this.root.replaceChild(stats.element, this.stats.element);
    this.stats = stats;
  }

  changeLevel() {
    this.updateHeader();
    const level = this.getGameView(this.model.getCurrentLevel());
    this.changeContentView(level);
  }

  endGame() {
    Application.showResult(this.model);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.gameContent.element);
    this.gameContent = view;
  }
}

export default GameScreen;
