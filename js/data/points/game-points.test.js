import {assert} from 'chai';
import {getSumPoints} from './game-points';

const getObj = (time) => {
  const obj = {};
  obj.isCorrect = true;
  obj.time = time || Math.round(Math.random() * 30);
  return obj;
};

const getArray = (arrayLength, time) => {
  const array = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(getObj(time));
  }
  return array;
};

describe(`Check points sum`, () => {
  it(`should return -1 when the answers less than 10`, () => {
    assert.equal(-1, getSumPoints(getArray(9, 20), 2));
  });
  it(`should return 1150 when speed of answers is normal and lives is full`, () => {
    assert.equal(1150, getSumPoints(getArray(10, 15), 3));
  });
  it(`should return 550 when speed of answers is slow and one live left`, () => {
    assert.equal(550, getSumPoints(getArray(10, 25), 1));
  });
  it(`should return -1 when the lives less than 1`, () => {
    assert.equal(-1, getSumPoints(getArray(10), 0));
  });
});
