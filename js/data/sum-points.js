import {InitialGame, Points} from './constants';

export const sumPoints = (answers, lives) => {
  if (answers.length < InitialGame.QUESTIONS || lives < 1) {
    return -1;
  }

  return answers
    .filter(({isCorrect}) => isCorrect)
    .reduce((points, {time}) => {
      if (time < 10) {
        points += Points.QUICK_ANSWER;
        return points;
      }
      if (time > 20) {
        points += Points.SLOW_ANSWER;
        return points;
      }
      points += Points.NORMAL_ANSWER;
      return points;
    }, lives * Points.LIVES);
};
