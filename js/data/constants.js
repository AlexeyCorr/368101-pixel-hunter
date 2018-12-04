export const NUMBER_QUESTIONS = 10;
export const MAX_LIVES = 3;

export const InitialGame = Object.freeze({
  level: 0,
  lives: MAX_LIVES,
  time: 30,
  answers: [],
  stats: []
});

export const PointsAnwser = {
  CORRECT: 100,
  QUICK: 150,
  SLOW: 50,
  BONUS: 50
};

export const Types = {
  oneImage: 0,
  twoImages: 1,
  threeImage: 2
};

export const ResultType = {
  CORRECT: `correct`,
  QUICK: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`
};
