export const debugStyle = `border: 5px solid rebeccapurple;`;

const hash = window.location.hash.replace(`#`, ``);

const DEBUG = hash.toLowerCase() === `debug`;

export const isDebug = (type, correct) => DEBUG && (type === correct);
