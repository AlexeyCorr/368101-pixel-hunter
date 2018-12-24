import BackButtonView from './../views/back-button-view';
import TimerView from './../views/timer-view';
import LivesView from './../views/lives-view';
import ChoiceLevelView from './../views/choice-level-view';
import FindLevelView from './../views/find-level-view';
import StatsView from './../views/stats-view';
import Application from './../application';
import {InitialGame} from './../data/game';

class GameScreen {
  constructor(model) {
    this._game = model;

    this.backButton = new BackButtonView();
    this.timer = new TimerView({time: this._game.state.time, blink: this._game.state.time <= 5});
    this.lives = new LivesView(this._game.state);
    this.gameContent = this._getGameView(this._game.getCurrentLevel());
    this.stats = new StatsView(this._game.state);

    this.header = document.createElement(`header`);
    this.header.classList.add(`header`);
    this.header.appendChild(this.backButton.element);
    this.header.appendChild(this.timer.element);
    this.header.appendChild(this.lives.element);

    this._root = document.createElement(`div`);
    this._root.appendChild(this.header);
    this._root.appendChild(this.gameContent.element);
    this._root.appendChild(this.stats.element);

    this._interval = null;
  }

  get element() {
    return this._root;
  }

  onAnswer(answer) {
    this._stopGame();
    const result = {
      isCorrect: answer,
      time: InitialGame.time - this._game.state.time
    };
    if (!result.isCorrect) {
      this._game.die();
    }
    let stat = this._game.getStats(result);
    this._game.addStats(stat);
    this._game.addAnswer(result);
    this._updateStats();
    if (this._game.canContinue()) {
      this._game.nextLevel();
      this.startGame();
      this._changeLevel();
    } else {
      this.endGame();
    }
    this._game.state.time = 30;
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
    const optimizedSize = this._game.imageResize(frame, given);

    image.width = optimizedSize.width;
    image.height = optimizedSize.height;
  }

  _getGameView(level) {
    const levelType = level.type;
    const isCorrect = (model) => {
      return model.answers
        .map(({type}) => type)
        .filter((it, i, arr) => arr.indexOf(it) === arr.lastIndexOf(it))
        .join(``);
    };

    const gameView = {
      'tinder-like': new ChoiceLevelView({game: level, wide: true}),
      'two-of-two': new ChoiceLevelView({game: level, wide: false}),
      'one-of-three': new FindLevelView({game: level, isCorrect: isCorrect(level)})
    };

    const view = gameView[levelType];

    view.onAnswer = this.onAnswer.bind(this);
    view.onImageLoad = this.imageResize.bind(this);

    return view;
  }

  _stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this._interval = setInterval(() => {
      this._game.tick();
      if (this._game.state.time === 0) {
        this.onAnswer(false);
      }
      this._updateTimer();
    }, 1000);
  }

  _updateTimer() {
    const timer = new TimerView({time: this._game.state.time, blink: this._game.state.time <= 5});
    this.header.replaceChild(timer.element, this.timer.element);
    this.timer = timer;
  }

  _updateLives() {
    const lives = new LivesView(this._game.state);
    this.header.replaceChild(lives.element, this.lives.element);
    this.lives = lives;
  }

  _updateStats() {
    const stats = new StatsView(this._game.state);
    this._root.replaceChild(stats.element, this.stats.element);
    this.stats = stats;
  }

  _changeLevel() {
    this._updateLives();
    this._updateTimer();
    const level = this._getGameView(this._game.getCurrentLevel());
    this.changeContentView(level);
  }

  endGame() {
    Application.showResult(this._game);
  }

  changeContentView(view) {
    this._root.replaceChild(view.element, this.gameContent.element);
    this.gameContent = view;
  }
}

export default GameScreen;
