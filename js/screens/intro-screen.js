import {render, showScreen} from './../util';
import greetingScreen from './greeting-screen';

const template =
  `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const element = render(template);

const continueButton = element.querySelector(`.intro__asterisk`);

continueButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  showScreen(greetingScreen);
});

export default element;
