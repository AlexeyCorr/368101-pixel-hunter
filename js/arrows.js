'use strict';

(function () {
  const wrapper = document.createElement(`div`);
  const arrow = document.createElement(`button`);

  const createArrow = () => {
    wrapper.classList.add(`arrows__wrap`);
    wrapper.style.position = `absolute`;
    wrapper.style.top = `95px`;
    wrapper.style.left = `50%`;
    wrapper.style.transform = `translateX(-50%)`;

    arrow.classList.add(`arrows__btn`);
    arrow.style.background = `none`;
    arrow.style.border = `2px solid black`;
    arrow.style.padding = `5px 20px`;
    arrow.textContent = `<-`;
    wrapper.appendChild(arrow.cloneNode(true));
    arrow.textContent = `->`;
    wrapper.appendChild(arrow.cloneNode(true));

    return wrapper;
  };
  
  document.querySelector(`body`).appendChild(createArrow());
})();
