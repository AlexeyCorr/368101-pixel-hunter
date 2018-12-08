import {NUMBER_QUESTIONS} from './game';

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

const getRandomArr = (arr, num) => {
  return arr.map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)
  .slice(num);
};

export const gameData = {
  oneImage: {
    type: `oneImage`,
    description: `Угадай, фото или рисунок?`,
    imageSum: 1,
    options: [
      {
        index: 1,
        imageType: `photo`,
        src: getRandomArr(pictures.photos, -1).join(``)
      }
    ],
  },
  twoImages: {
    type: `twoImages`,
    description: `Угадайте для каждого изображения фото или рисунок?`,
    viewClass: ``,
    imageSum: 2,
    options: [
      {
        index: 1,
        imageType: `photo`,
        src: getRandomArr(pictures.photos, -1).join(``)
      },
      {
        index: 2,
        imageType: `paint`,
        src: getRandomArr(pictures.paintings, -1).join(``)
      }
    ]
  },
  threeImages: {
    type: `threeImages`,
    description: `Найдите рисунок среди изображений`,
    viewClass: `game__content--triple`,
    imageSum: 3,
    options: [
      {
        index: 1,
        imageType: `photo`,
        src: getRandomArr(pictures.photos, -1).join(``)
      },
      {
        index: 2,
        imageType: `paint`,
        src: getRandomArr(pictures.paintings, -1).join(``)
      },
      {
        index: 3,
        imageType: `photo`,
        src: getRandomArr(pictures.photos, -1).join(``)
      }
    ]
  }
};

const getTypes = () => gameData.map((it) => it.type);

export const getGameTypes = () => {
  const types = [];
  for (let i = 0; i < NUMBER_QUESTIONS; i++) {
    types.push(getRandomArr(getTypes(), -1).join(``));
  }
  return types;
};
