export const Limit = {
  QUESTIONS: 10,
  LIVES: 3,
  TIME: 30
};

export const InitialGame = Object.freeze({
  level: 0,
  lives: Limit.LIVES,
  time: Limit.TIME,
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
  if (answers.length < Limit.QUESTIONS || lives < 1) {
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

  if (level > Limit.QUESTIONS) {
    throw new Error(`Level can not be more than 10`);
  }

  return Object.assign({}, game, {
    level
  });
};

export const die = (state) => ({
  ...state,
  lives: state.lives - 1
});

export const tick = (state) => ({
  ...state,
  time: state.time - 1
});

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

