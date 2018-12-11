import {
  InitialGame,
  die, tick,
  changeLevel,
  NUMBER_QUESTIONS,
  resize, ResultType
} from './game';
import {GAME} from './game-data';

const getLevel = (state) => GAME[state.level];

class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  hasNextLevel() {
    return this._state.level + 1 !== NUMBER_QUESTIONS;
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

  getCurrentLevel() {
    return getLevel(this._state);
  }

  win() {
    return this._state.level === NUMBER_QUESTIONS;
  }

  tick() {
    this._state = tick(this._state);
  }

  getStats(state) {
    let time = InitialGame.time - state.time;
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
