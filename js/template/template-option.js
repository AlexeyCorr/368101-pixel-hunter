const template = {
  oneImage(image, number) {
    return `<img src="${image || `http://placehold.it/705x455`}" alt="Option ${number}" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input class="visually-hidden" name="question${number}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input class="visually-hidden" name="question${number}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>`;
  },
  twoImages(image, number) {
    return `<img src="${image || `http://placehold.it/468x458`}" alt="Option ${number}" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name="question${number}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name="question${number}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>`;
  },
  threeImages(image, number) {
    return `<img src="${image || `http://placehold.it/304x455`}" alt="Option ${number}" width="304" height="455">`;
  }
};

export default template;
