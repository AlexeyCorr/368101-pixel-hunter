import ButtonBackView from './../views/button-back-view';
import TimerView from './../views/timer-view';
import LivesView from './../views/lives-view';
import ChoiceLevelView from './../views/choice-level-view';
import FindLevelView from './../views/find-level-view';
import StatsView from './../views/stats-view';
import Application from './../application';
import {InitialGame} from './../data/game';

class GameScreen {
  constructor(model) {
    this.model = model;
    this.buttonBack = new ButtonBackView();
    this.timer = new TimerView(this.model.state);
    this.lives = new LivesView(this.model.state);
    this.gameContent = this.getGameView(this.model.getCurrentLevel());
    this.stats = new StatsView(this.model.state);

    this.header = document.createElement(`header`);
    this.header.classList.add(`header`);
    this.header.appendChild(this.buttonBack.element);
    this.header.appendChild(this.timer.element);
    this.header.appendChild(this.lives.element);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.header);
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
      'tinder-like': new ChoiceLevelView(level),
      'two-of-two': new ChoiceLevelView(level),
      'one-of-three': new FindLevelView(level)
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
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const timer = new TimerView(this.model.state);
    if (this.model.state.time <= 5) {
      timer.element.classList.add(`game__timer--blink`);
    }
    this.header.replaceChild(timer.element, this.timer.element);
    this.timer = timer;
  }

  updateLives() {
    const lives = new LivesView(this.model.state);
    this.header.replaceChild(lives.element, this.lives.element);
    this.lives = lives;
  }

  updateStats() {
    const stats = new StatsView(this.model.state);
    this.root.replaceChild(stats.element, this.stats.element);
    this.stats = stats;
  }

  changeLevel() {
    this.updateLives();
    this.updateTimer();
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
