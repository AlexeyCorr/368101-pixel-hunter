import {assert} from 'chai';
import {sumPoints} from './../sum-points';
import {Points} from './../constants';

const games = (repeat, result) => new Array(repeat).fill(result);
const calcPoints = ({lives = 0, normal = 0, quick = 0, slow = 0} = {}) => {
  return lives * Points.LIVES +
         normal * Points.NORMAL_ANSWER +
         quick * Points.QUICK_ANSWER +
         slow * Points.SLOW_ANSWER;
};

describe(`sumPoints`, () => {
  const testAnswers = [
    {
      lives: 2,
      answers: [...games(9, {isCorrect: true, time: 2})],
      expected: -1,
      message: `the answers less than 10`
    },
    {
      lives: 0,
      answers: [...games(10, {isCorrect: true, time: 19})],
      expected: -1,
      message: `the lives less than 1`
    },
    {
      lives: 3,
      answers: [...games(10, {isCorrect: true, time: 15})],
      expected: calcPoints({lives: 3, normal: 10}),
      message: `the speed of answers is normal and lives is full`
    },
    {
      lives: 2,
      answers: [...games(10, {isCorrect: true, time: 9})],
      expected: calcPoints({lives: 2, quick: 10}),
      message: `QUICK answers`
    },
    {
      lives: 1,
      answers: [
        ...games(3, {isCorrect: true, time: 1}),
        ...games(7, {isCorrect: true, time: 4})
      ],
      expected: calcPoints({lives: 1, quick: 10}),
      message: `QUICK answers`
    }
  ];

  testAnswers.forEach(({answers, lives, expected, message}) => {
    it(`should return ${expected} when ${message}`, () => {
      assert.deepStrictEqual(sumPoints(answers, lives), expected);
    });
  });
});
