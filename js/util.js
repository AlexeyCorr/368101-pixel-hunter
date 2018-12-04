export const render = (template = ``) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();;
  return wrapper;
};

export const renderHeader = (...blocks) => {
  console.log(blocks);
  const header = document.createElement(`header`);
  header.classList.add(`header`);
  blocks.forEach((block) => header.appendChild(block));
  return header;
};

export const container = document.querySelector(`#main`);
export const showScreen = (screen) => {
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
