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

export const preloadImage = (data) => data.map(({answers}) => {
  const images = answers.map(({image}, index) => {
    const {url, width, height} = image;
    const img = new Image();

    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Error loading "${url}"`));
      img.src = url;
      img.alt = `Option ${index + 1}`;

      const frame = {
        width,
        height
      };
      const given = {
        width: img.naturalWidth,
        height: img.naturalHeight
      };
      const resizeSize = resize(frame, given);

      img.width = resizeSize.width;
      img.height = resizeSize.height;
    });
  });

  return Promise.all(images);
});
