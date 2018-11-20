import {render, showScreen} from './../util';
import {greetingScreen} from './../screens/index';

const template =
  `<button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>`;

const element = render(template);

const returnButton = element.querySelector(`.back`);

const addReturnButton = (position) => {
  const button = returnButton.cloneNode(true);
  button.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    showScreen(greetingScreen);
  });
  position.insertAdjacentElement(`afterbegin`, button);
};

export default addReturnButton;
