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
  FAST: 150,
  SLOW: 50,
  BONUS: 50
};

export const ResultType = {
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`,
  UNKNOWN: `unknown`
};

export const sumPoints = (answers, lives) => {
  if (answers.length < NUMBER_QUESTIONS || lives < 1) {
    return `fail`;
  }

  return answers
    .filter(({isCorrect}) => isCorrect)
    .reduce((points, {time}) => {
      if (time < 10) {
        points += PointsAnwser.FAST;
        return points;
      }
      if (time > 20) {
        points += PointsAnwser.SLOW;
        return points;
      }
      points += PointsAnwser.CORRECT;
      return points;
    }, lives * PointsAnwser.BONUS);
};

export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  return Object.assign({}, game, {
    level
  });
};

export const canContinue = (game) => game.lives > 0;

export const die = (game) => {
  const lives = game.lives - 1;

  return Object.assign({}, game, {
    lives
  });
};

export const tick = (game) => {
  const time = game.time - 1;

  return Object.assign({}, game, {
    time
  });
};

export const resize = (frame, given) => {
  const obj = {};

  const rateWidth = frame.width / given.width;
  const rateHeight = frame.height / given.height;

  if (rateWidth === rateHeight) {
    obj.width = given.width * rateWidth;
    obj.height = given.height * rateHeight;
  } else if (rateWidth > rateHeight) {
    obj.width = given.width * rateHeight;
    obj.height = given.height * rateHeight;
  } else if (rateWidth < rateHeight) {
    obj.width = given.width * rateWidth;
    obj.height = given.height * rateWidth;
  }

  return obj;
};

