'use strict';

(function () {
  const KEYCODES = {
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39
  };
  const mainBlock = document.querySelector(`#main`);
  const templates = document.querySelectorAll(`template`);

  const screens = Array.from(templates).map((it) => {
    const wrapper = document.createElement(`div`);
    const screen = it.content.cloneNode(true);
    wrapper.appendChild(screen);
    return wrapper.cloneNode(true);
  });

  const showScreen = (screen) => {
    mainBlock.innerHTML = ``;
    mainBlock.appendChild(screen);
  };

  let currentIndex = 0;
  const selectScreen = (index) => {
    index = index < 0 ? screens.length - 2 : index;
    index = index >= screens.length ? 0 : index;
    currentIndex = index;
    showScreen(screens[currentIndex]);
  };

  document.addEventListener(`keydown`, (evt) => {
    switch (evt.keyCode) {
      case KEYCODES.LEFT_ARROW:
        selectScreen(currentIndex - 1);
        break;

      case KEYCODES.RIGHT_ARROW:
        selectScreen(currentIndex + 1);
        break;
    }
  });

  selectScreen(2);
})();
