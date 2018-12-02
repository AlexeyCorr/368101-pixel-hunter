const NUMBER_QUESTIONS = 10;

const InitialGame = Object.freeze({
  LEVEL: 0,
  LIVES: 3,
  TIME: 30
});

const Points = {
  LIVES: 50,
  QUICK_ANSWER: 150,
  NORMAL_ANSWER: 100,
  SLOW_ANSWER: 50
};

const Stats = {
  QUICK_ANSWER: `fast`,
  SLOW_ANSWER: `slow`,
  NORMAL_ANSWER: `correct`,
  WRONG_ANSWER: `wrong`
};

export {InitialGame, Points, Stats, NUMBER_QUESTIONS};
