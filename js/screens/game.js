import {render, showScreen} from './../util';
import {gameData} from './../data/data';
import {
  getGameTypes
} from './../data/game-data';
import {
  InitialGame,
  NUMBER_QUESTIONS
} from './../data/constants';
import {
  templateOption,
  templateLives,
  templateTime,
  templateStats,
  templateButtonBack
} from './../components/index';
import resultScreen from './result-screen';

let gameTypes;
let gameState;

export const newGame = () => {
  gameTypes = getGameTypes();
  gameState = Object.assign({}, InitialGame);

  const gameContainerElement = render();
  const headerElement = render();
  const levelElement = render();
};

newGame();

const gameTemplate = (state) =>
  `<header class="header">
    ${templateButtonBack()}
    ${templateTime(state)}
    ${templateLives(state)}
  </header>
  <section class="game">
    <p class="game__task">${gameData[gameTypes[state.level]].description}</p>
    <form class="game__content ${gameData[gameTypes[state.level]].view}">
      ${gameData[gameTypes[state.level]].photos.map((photo, number) => `<div class="game__option">
        ${templateOption[gameTypes[state.level]](photo, number)}
      </div>`).join(``)}
    </form>
  </section>
  ${templateStats(gameData)}`;

const element = render(gameTemplate(gameState));
const radioButtons = element.querySelectorAll(`input[type=radio]`);
const optionAnswers = element.querySelectorAll(`.game__option`);

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

checkAnswer(gameState);

export default element;
