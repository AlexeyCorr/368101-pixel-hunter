const MAX_LEVELS = 10;

const pictures = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

const gameTypes = [`type-1`, `type-2`, `type-3`];

const getRandomArr = (arr, num) => {
  return arr.map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)
  .slice(num);
};

export const gameData = {
  'type-1': {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    view: ``,
    photos: getRandomArr(pictures.paintings, -1).concat(getRandomArr(pictures.photos, -1))
  },
  'type-2': {
    description: `Угадай, фото или рисунок?`,
    view: `game__content--wide`,
    photos: getRandomArr(pictures.paintings.concat(pictures.photos), -1)
  },
  'type-3': {
    description: `Найдите рисунок среди изображений`,
    view: `game__content--triple`,
    photos: getRandomArr(pictures.paintings, -1).concat(getRandomArr(pictures.photos, -2))
  },
  getLevels() {
    const levels = [];
    for (let i = 0; i < MAX_LEVELS; i++) {
      levels.push(getRandomArr(gameTypes, -1).join(``));
    }
    return levels;
  }
};

export const answerStats = [`slow`, `wrong`, `slow`, `fast`, `correct`];
