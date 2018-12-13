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

const gameData = [
  {
    type: `oneImage`,
    question: `Угадай, фото или рисунок?`,
    className: `game__content--wide`,
    answers: [
      {
        image: {
          src: pictures.photos[0],
          width: 705,
          height: 455
        },
        type: `photo`
      }
    ]
  },
  {
    type: `twoImages`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    className: ``,
    answers: [
      {
        image: {
          src: pictures.photos[1],
          width: 468,
          height: 468
        },
        type: `photo`
      },
      {
        image: {
          src: pictures.paintings[0],
          width: 468,
          height: 468
        },
        type: `paint`
      }
    ]
  },
  {
    type: `threeImages`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          src: pictures.photos[2],
          width: 304,
          height: 455
        },
        type: `photo`
      },
      {
        image: {
          src: pictures.paintings[1],
          width: 304,
          height: 455
        },
        type: `paint`
      },
      {
        image: {
          src: pictures.photos[2],
          width: 304,
          height: 455
        },
        type: `photo`
      },
    ]
  }
];

const getGameData = () => {
  const data = [];
  for (let i = 0; i < NUMBER_QUESTIONS; i++) {
    data.push(gameData[Math.floor(Math.random() * gameData.length)]);
  }
  return data;
};

export const GAME = getGameData();
