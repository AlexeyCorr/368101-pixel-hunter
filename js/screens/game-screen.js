import HeaderView from './../views/header-view';
import ChoiceLevelView from './../views/choice-level-view';
import FindLevelView from './../views/find-level-view';
import StatsView from './../views/stats-view';
import Application from './../application';

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

  answer() {
    if (this.model.hasNextLevel() && !this.model.isDead()) {
      this.stopGame();
      this.model.nextLevel();
      this.startGame();
      this.changeLevel();
    } else {
      this.endGame();
    }
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

    view.onAnswer = this.answer.bind(this);
    view.onImageLoad = this.imageResize.bind(this);

    return view;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeLevel() {
    this.updateHeader();
    const level = this.getGameView(this.model.getCurrentLevel());
    this.changeContentView(level);
  }

  endGame() {
    Application.showStats();
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.gameContent.element);
    this.gameContent = view;
  }

}

export default GameScreen;
