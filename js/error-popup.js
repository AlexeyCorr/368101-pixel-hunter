import {render, showScreen} from './util.js';
//import gemeTwoScreen from './rules-screen.js';

const template =
  `<section class="modal">
    <div class="modal__inner">
      <h2 class="modal__title">Произошла ошибка!</h2>
      <p class="modal__text modal__text--error">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
    </div>
  </section>`;

const element = render(template);

// const buttonContinue = element.querySelector(`.greeting__continue`);

// buttonContinue.addEventListener(`click`, (evt) => {
//   evt.preventDefault();
//   showScreen(rules);
// });

export default element;
