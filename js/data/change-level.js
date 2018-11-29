export const changeLevel = (currentLevel) => {
  if (typeof currentLevel !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (currentLevel < 0) {
    throw new Error(`Level should not be negative value`);
  }

  return currentLevel + 1;
};
