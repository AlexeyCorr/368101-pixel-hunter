import {
  InitialGame,
  die, tick,
  changeLevel,
  resize, ResultType,
  Limit
} from './game';

class GameModel {
  constructor(data, playerName) {
    this.data = data;
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  addAnswer(newAnswer) {
    this._state = Object.assign({}, this._state, {
      answers: [...this._state.answers, newAnswer]
    });
  }

  addStats(newStats) {
    this._state = Object.assign({}, this._state, {
      stats: [...this._state.stats, newStats]
    });
  }

  canContinue() {
    return !this.isDead() && this.hasNextLevel();
  }

  hasNextLevel() {
    return this._state.level + 1 !== Limit.QUESTIONS;
  }

  imageResize(frame, given) {
    return resize(frame, given);
  }

  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }

  die() {
    this._state = die(this._state);
  }

  restart() {
    this._state = InitialGame;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  getLevel(level) {
    return this.data[level];
  }

  getCurrentLevel() {
    return this.getLevel(this._state.level);
  }

  tick() {
    this._state = tick(this._state);
  }

  getStats(state) {
    let time = state.time;
    if (state.isCorrect) {
      if (time < 10) {
        return ResultType.FAST;
      } else if (time > 20) {
        return ResultType.SLOW;
      } else if (time >= 10 && time <= 20) {
        return ResultType.CORRECT;
      }
    } else {
      return ResultType.WRONG;
    }
    return ResultType.UNKNOWN;
  }
}

export default GameModel;
