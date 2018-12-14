import {
  InitialGame,
  die, tick,
  changeLevel,
  resize, ResultType,
  sumPoints
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

  hasNextLevel() {
    return this._state.level + 1 !== this.data.length;
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

  win() {
    return this._state.level === this.data.length;
  }

  tick() {
    this._state = tick(this._state);
  }

  getSumPoints(answers, lives) {
    return sumPoints(answers, lives);
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
