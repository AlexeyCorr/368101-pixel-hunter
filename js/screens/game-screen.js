import BackButtonView from './../views/back-button-view';
import TimerView from './../views/timer-view';
import LivesView from './../views/lives-view';
import ChoiceLevelView from './../views/choice-level-view';
import FindLevelView from './../views/find-level-view';
import StatsView from './../views/stats-view';
import Application from './../application';
import {InitialGame} from './../data/game';

class GameScreen {
  constructor(model, images) {
    this._game = model;
    this._images = images;

    const backButton = new BackButtonView();
    this._timer = new TimerView({time: this._game.state.time, blink: this._game.state.time <= 5});
    this._lives = new LivesView(this._game.state);
    this._gameContent = this._getGameView(this._game.getCurrentLevel());
    this._stats = new StatsView(this._game.state);

    this.header = document.createElement(`header`);
    this.header.classList.add(`header`);
    this.header.appendChild(backButton.element);
    this.header.appendChild(this._timer.element);
    this.header.appendChild(this._lives.element);

    this._root = document.createElement(`div`);
    this._root.appendChild(this.header);
    this._root.appendChild(this._gameContent.element);
    this._root.appendChild(this._stats.element);

    this._interval = null;
  }

  get element() {
    return this._root;
  }

  _onAnswer(answer) {
    this.stopGame();
    const result = {
      isCorrect: answer,
      time: InitialGame.time - this._game.state.time
    };
    if (!result.isCorrect) {
      this._game.die();
    }
    const stat = this._game.getStats(result);
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

  insertImages(option, index, images) {
    option.appendChild(images[index]);
  }

  _getGameView(level) {
    const images = this._images[this._game.state.level];
    const levelType = level.type;
    const isCorrect = (model) => {
      return model.answers
        .map(({type}) => type)
        .filter((it, i, arr) => arr.indexOf(it) === arr.lastIndexOf(it))
        .join(``);
    };

    const gameView = {
      'tinder-like': new ChoiceLevelView({game: level, wide: true, images}),
      'two-of-two': new ChoiceLevelView({game: level, wide: false, images}),
      'one-of-three': new FindLevelView({game: level, isCorrect: isCorrect(level), images})
    };

    const view = gameView[levelType];

    view.onAnswer = this._onAnswer.bind(this);
    view.onInsertImages = this.insertImages.bind(this);

    return view;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this._interval = setInterval(() => {
      this._game.tick();
      if (this._game.state.time === 0) {
        this._onAnswer(false);
      }
      this._updateTimer();
    }, 1000);
  }

  _updateTimer() {
    const timer = new TimerView({time: this._game.state.time, blink: this._game.state.time <= 5});
    this.header.replaceChild(timer.element, this._timer.element);
    this._timer = timer;
  }

  _updateLives() {
    const lives = new LivesView(this._game.state);
    this.header.replaceChild(lives.element, this._lives.element);
    this._lives = lives;
  }

  _updateStats() {
    const stats = new StatsView(this._game.state);
    this._root.replaceChild(stats.element, this._stats.element);
    this._stats = stats;
  }

  _changeLevel() {
    this._updateLives();
    this._updateTimer();
    const level = this._getGameView(this._game.getCurrentLevel());
    this._changeContentView(level);
  }

  endGame() {
    Application.showResult(this._game);
  }

  _changeContentView(view) {
    this._root.replaceChild(view.element, this._gameContent.element);
    this._gameContent = view;
  }
}

export default GameScreen;
