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
  Types,
  NUMBER_QUESTIONS
} from './../data/constants';
import {
  templateOption,
  templateLives,
  templateTime,
  templateGame,
  templateButtonBack
} from './../template/index';
import resultScreen from './result-screen';

let gameTypes;
let gameState;

export const newtGame = () => {
  gameTypes = getGameTypes();
  gameState = Object.assign({}, InitialGame);

  let data = gameData[Types[gameTypes[gameState.level]]];

  console.log(data);

  console.log(templateGame(data, gameState.stats));
};

// const element = render(gameTemplate(gameState));
// const radioButtons = element.querySelectorAll(`input[type=radio]`);
// const optionAnswers = element.querySelectorAll(`.game__option`);

const checkRadioAnswers = (options) => {
  const answers = new Set();
  options.forEach((it) => {
    it.addEventListener(`change`, () => {
      if (it.checked) {
        answers.add(it.name);
        if ([...answers].length === (options.length / 2)) {
          changeLevel(gameState);
        }
      }
    });
  });
};

const checkPicAnswers = (options) => {
  options.forEach((it) => {
    it.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      it.classList.add(`game__option--selected`);
      changeLevel(gameState);
    });
  });
};

const checkAnswer = (state) => {
  if (gameTypes[state.level] === (`type-1` || `type-2`)) {
    checkRadioAnswers(radioButtons);
  } else if (gameTypes[state.level] === (`type-3`)) {
    checkPicAnswers(optionAnswers);
  }
};

const changeLevel = (state) => {
  state.level += 1;

  if ((state.lives === 0) || (state.level >= NUMBER_QUESTIONS)) {
    showScreen(resultScreen);
  } else {
    showScreen(render(gameTemplate(state)));
  }
};

// checkAnswer(gameState);

export default element;
