import {assert} from 'chai';
import {changeLevel} from './../change-level';

const incorrectData = [-1, `string`, null, [], true, false, undefined, {}];

describe(`changeLevel`, () => {
  it(`should update level of the game`, () => {
    const currentLevel = 5;
    assert.equal(changeLevel(currentLevel), currentLevel + 1);
  });

  it(`should throw error when negative values`, () => {
    assert.throws(() => changeLevel(-1));
  });

  for (const data of incorrectData) {
    it(`should throw error when given incorrect data ${data}`, () => {
      assert.throws(() => {
        changeLevel(data);
      });
    });
  }
});
