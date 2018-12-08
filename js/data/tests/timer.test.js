import assert from 'assert';
import {
  tick,
  InitialGame
} from './../game';

const SECOND = 1000;

describe(`tick`, () => {
  const times = [5, 10, 15, 20, 25, 30];

  times.forEach((time) => {
    it(`should return ${InitialGame.time - time} after ${time} seconds`, () => {
      const timer = () => setInterval(() => tick(InitialGame), SECOND);
      setTimeout(() => {
        assert.deepStrictEqual(timer.time, `${InitialGame.time - time}`);
        clearInterval(timer);
      }, time * SECOND);
    });
  });
});
