const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainBlock = document.querySelector(`#main`);
const showScreen = (screen) => {
  mainBlock.innerHTML = ``;
  mainBlock.appendChild(screen);
};

const checkAnswers = (radioButtons, numberQuestions, nextScreen) => {
  let answers = [];
  radioButtons.forEach((it) => {
    it.addEventListener(`change`, () => {
      if (it.checked) {
        if (answers.indexOf(it.name) < 0) {
          answers.push(it.name);
        }
        if (answers.length === numberQuestions) {
          showScreen(nextScreen);
        }
      }
    });
  });
};

export {render, showScreen, checkAnswers};
