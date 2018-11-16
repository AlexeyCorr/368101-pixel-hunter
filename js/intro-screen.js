import {render, showScreen} from './util.js';
import greetingScreen from './greeting-screen.js';

const template =
  `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const element = render(template);

const buttonContinue = element.querySelector(`.intro__asterisk`);

buttonContinue.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  showScreen(greetingScreen);
});

export default element;
