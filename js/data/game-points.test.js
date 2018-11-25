import {assert} from 'chai';
import {sumPoints} from './game-points';
import {Points} from './constants';

const games = (repeat, result) => new Array(repeat).fill(result);
const points = ({lives = 0, normal = 0, quick = 0, slow = 0} = {}) => lives * Points.LIVES + normal * Points.NORMAL_ANSWER + quick * Points.QUICK_ANSWER + slow * Points.SLOW_ANSWER;

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
      expected: 1150,
      message: `the speed of answers is normal and lives is full`
    },
    {
      lives: 2,
      answers: [...games(10, {isCorrect: true, time: 9})],
      expected: points({lives: 2, quick: 10}),
      message: `QUICK answers`
    },
    {
      lives: 1,
      answers: [
        ...games(3, {isCorrect: true, time: 1}),
        ...games(7, {isCorrect: true, time: 4})
      ],
      expected: points({lives: 1, quick: 10}),
      message: `QUICK answers`
    }
  ];

  testAnswers.forEach(({answers, lives, expected, message}) => {
    it(`should return ${expected} when ${message}`, () => {
      assert.deepStrictEqual(sumPoints(answers, lives), expected);
    });
  });
});
