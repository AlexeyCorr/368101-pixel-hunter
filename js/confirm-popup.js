import {render, showScreen} from './util.js';
//import gemeTwoScreen from './rules-screen.js';

const template =
  `<section class="modal">
    <form class="modal__inner">
      <button class="modal__close" type="button">
        <span class="visually-hidden">Закрыть</span>
      </button>
      <h2 class="modal__title">Подтверждение</h2>
      <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal__button-wrapper">
        <button class="modal__btn">Ок</button>
        <button class="modal__btn">Отмена</button>
      </div>
    </form>
  </section>`;

const element = render(template);

// const buttonContinue = element.querySelector(`.greeting__continue`);

// buttonContinue.addEventListener(`click`, (evt) => {
//   evt.preventDefault();
//   showScreen(rules);
// });

export default element;
