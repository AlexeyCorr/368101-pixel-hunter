export const changeLives = (lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Lives must be type number`);
  }
  if (lives < 1) {
    throw new Error(`Lives must be greater than 0`);
  }

  return lives - 1;
};
