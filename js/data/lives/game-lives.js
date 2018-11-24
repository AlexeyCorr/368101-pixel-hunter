const MAX_LIVES = 3;

const getLives = (answers) => {
  let lives = MAX_LIVES;
  if (lives < 1) {
    return -1;
  }
  answers.forEach((it) => {
    if (!it.isCorrect) {
      lives--;
    }
  });

  return lives;
};

export {getLives};
