import {
  NUMBER_QUESTIONS,
  PointsAnwser
} from './constants';

export const sumPoints = (answers, lives) => {
  if (answers.length < NUMBER_QUESTIONS || lives < 1) {
    return -1;
  }

  return answers
    .filter(({isCorrect}) => isCorrect)
    .reduce((points, {time}) => {
      if (time < 10) {
        points += PointsAnwser.QUICK;
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
