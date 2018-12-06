import assert from 'assert';
import {countTime} from './../count-time';

const SECOND = 1000;
const MAX_TIME = 30;

describe(`countTime`, () => {
  const times = [5, 10, 15, 20, 25, 30];

  times.forEach((time) => {
    it(`should return ${MAX_TIME - time} after ${time} seconds`, () => {
      const timer = setInterval(() => countTime(), SECOND);
      setTimeout(() => {
        assert.deepStrictEqual(timer, `${MAX_TIME - time}`);
        clearInterval(timer);
      }, time * SECOND);
    });
  });
});
