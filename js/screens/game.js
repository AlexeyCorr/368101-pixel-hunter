import {
  render,
  renderHeader,
  showScreen} from './../util';
import {
  getGameTypes,
  gameData
} from './../data/game-data';
import {
  InitialGame,
  Types
} from './../data/constants';
import {
  templateHeader,
  templateGame,
  templateButtonBack
} from './../template/index';
import resultScreen from './result-screen';

let gameTypes;
let gameState;

export default () => {
  gameTypes = getGameTypes();
  gameState = Object.assign({}, InitialGame);

  const gameContainerElement = render();
  const headerElement = render();
  const levelElement = render();
  headerElement.appendChild(templateButtonBack);

  gameContainerElement.appendChild(headerElement);
  gameContainerElement.appendChild(levelElement);

  const updateGame = (state) => {
    headerElement.innerHTML = templateHeader(state);
    levelElement.innerHTML = templateGame(gameData[Types[gameTypes[state.level]]], state.stats);
  };

  updateGame(gameState);
  showScreen(gameContainerElement);
};
// const element = render(gameTemplate(gameState));
// const radioButtons = element.querySelectorAll(`input[type=radio]`);
// const optionAnswers = element.querySelectorAll(`.game__option`);

// const checkRadioAnswers = (options) => {
//   const answers = new Set();
//   options.forEach((it) => {
//     it.addEventListener(`change`, () => {
//       if (it.checked) {
//         answers.add(it.name);
//         if ([...answers].length === (options.length / 2)) {
//           changeLevel(gameState);
//         }
//       }
//     });
//   });
// };

// const checkPicAnswers = (options) => {
//   options.forEach((it) => {
//     it.addEventListener(`click`, (evt) => {
//       evt.preventDefault();
//       it.classList.add(`game__option--selected`);
//       changeLevel(gameState);
//     });
//   });
// };

// const checkAnswer = (state) => {
//   if (gameTypes[state.level] === (`type-1` || `type-2`)) {
//     checkRadioAnswers(radioButtons);
//   } else if (gameTypes[state.level] === (`type-3`)) {
//     checkPicAnswers(optionAnswers);
//   }
// };

// const changeLevel = (state) => {
//   state.level += 1;

//   if ((state.lives === 0) || (state.level >= NUMBER_QUESTIONS)) {
//     showScreen(resultScreen);
//   } else {
//     showScreen(render(gameTemplate(state)));
//   }
// };

// checkAnswer(gameState);
