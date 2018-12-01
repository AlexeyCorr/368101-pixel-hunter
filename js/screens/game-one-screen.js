import {render, checkAnswers} from './../util';
import {gameTwoScreen} from './index';
import {headerTemplate} from './index';
import {gameData} from './../data/data';
import {getOptionTemplate} from './index';
import {statsTemplate} from './index';

const gameTemplate = (type) => `<section class="game">
  <p class="game__task">${gameData[type].description}</p>
  <form class="game__content ${gameData[type].view}">
    ${gameData[type].photos.map((photo, number) =>
      `<div class="game__option">
        ${getOptionTemplate[type](photo, number)}
      </div>`
    ).join(``)}
  </form>
</section>`;

const element = render(gameTemplate(`type-3`));

element.insertAdjacentElement(`afterbegin`, headerTemplate);
element.insertAdjacentElement(`beforeend`, statsTemplate);

const radioButtons = element.querySelectorAll(`input[type=radio]`);
checkAnswers(radioButtons, 2, gameTwoScreen);

export default element;
