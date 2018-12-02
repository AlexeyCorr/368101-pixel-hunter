import {render} from './../util';
import {addReturnButton} from './../components/index';
import {InitialGame} from './../data/constants';

const headerTemplate = (state) => `<header class="header">
  <div class="game__timer">${state.TIME}</div>
  <div class="game__lives">
    ${new Array(state.LIVES - state.LIVES)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Missed Life" width="31" height="27">`)
      .join(``)}
    ${new Array(state.LIVES)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
  </div>
</header>`;

const element = render(headerTemplate(InitialGame));

addReturnButton(element.querySelector(`.header`));

export default element;
