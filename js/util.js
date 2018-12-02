const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper;
};

const container = document.querySelector(`#main`);
const showScreen = (screen) => {
  container.innerHTML = ``;
  container.appendChild(screen);
};

const checkAnswers = (radioButtons, numberQuestions, nextScreen) => {
  const answers = new Set();
  radioButtons.forEach((it) => {
    it.addEventListener(`change`, () => {
      if (it.checked) {
        answers.add(it.name);
        if ([...answers].length === numberQuestions) {
          showScreen(nextScreen);
        }
      }
    });
  });
};

export {
  render,
  showScreen,
  checkAnswers
};
