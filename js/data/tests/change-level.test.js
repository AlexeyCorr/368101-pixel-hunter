import assert from 'assert';
import {
  changeLevel,
  InitialGame,
  Limit
} from './../game';

describe(`changeLevel`, () => {
  it(`must update game level`, () => {
    assert.equal(changeLevel(InitialGame, 2).level, 2);
    assert.equal(changeLevel(InitialGame, 5).level, 5);
    assert.equal(changeLevel(InitialGame, 9).level, 9);
  });

  it(`level value must be number`, () => {
    assert.throws(() => changeLevel(InitialGame, []).level, /Level should be of type number/);
  });

  it(`should throw an error if the level is negative`, () => {
    assert.throws(() => changeLevel(InitialGame, -5).level, /Level should not be negative value/);
  });

  it(`level should not be more than ${Limit.QUESTIONS}`, () => {
    assert.throws(() => changeLevel(InitialGame, 99).level, /Level can not be more than 10/);
  });
});
