export const getOptionTemplate = {
  'type-1': (image, number) => {
    return `<img src="${image || `http://placehold.it/468x458`}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name="question${number}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name="question${number}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>`;
  },
  'type-2': (image, number) => {
    return `<img src="${image || `http://placehold.it/705x455`}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input class="visually-hidden" name="question${number}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input class="visually-hidden" name="question${number}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>`;
  },
  'type-3': (image, number) => {
    return `<img src="${image || `http://placehold.it/304x455`}" alt="Option ${number}" width="304" height="455">`;
  }
};
