const SUM_QUESTIONS = 10;
const PointsAnswer = {
  NORMAL: 100,
  FAST: 150,
  SLOW: 50
};

const getSumPoints = (answers, lives) => {
  let points = 0;
  if (answers.length < SUM_QUESTIONS) {
    return -1;
  }
  if (lives < 1) {
    return -1;
  }
  answers.forEach((it) => {
    if (it.isCorrect) {
      switch (true) {
        case it.time <= 10:
          points += PointsAnswer.FAST;
          break;
        case it.time > 10 && it.time <= 20:
          points += PointsAnswer.NORMAL;
          break;
        case it.time > 20:
          points += PointsAnswer.SLOW;
          break;
      }
    } else {
      points += 0;
    }
  });
  points += (50 * lives);
  return points;
};

export {getSumPoints};
