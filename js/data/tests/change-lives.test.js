import assert from 'assert';
import {changeLives} from './../change-lives';

const incorrectData = [-1, `string`, null, [], true, false, undefined, {}];

describe(`changeLives`, () => {
  it(`lives should be reduced by one`, () => {
    const currentLives = 3;
    assert.deepStrictEqual(changeLives(currentLives), currentLives - 1);
  });

  for (const data of incorrectData) {
    it(`should throw error when given incorrect data ${data}`, () => {
      assert.throws(() => {
        hangeLives(data)
      });
    });
  }
});
