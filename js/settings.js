export const DebugStyle = {
  BORDER: `border-color: rebeccapurple;`,
  BACKGROUND: `background-color: rebeccapurple;`
};

const hash = window.location.hash.replace(`#`, ``);

const DEBUG = hash.toLowerCase() === `debug`;

export const isDebug = (type, correct) => DEBUG && (type === correct);
