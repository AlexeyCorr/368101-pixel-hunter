// import {render, showScreen} from './../util';
// import {getGameTypes, gameData} from './../data/game-data';
// import {InitialGame, Types} from './../data/constants';
// import {
//   templateHeader,
//   templateGame,
//   templateButtonBack
// } from './../template/index';

// let gameTypes;
// let gameState;

// export default () => {
//   gameTypes = getGameTypes();
//   gameState = Object.assign({}, InitialGame);

//   let type = gameTypes[gameState.level];

//   const gameContainerElement = render();
//   const headerElement = render();
//   const levelElement = render();

//   gameContainerElement.appendChild(headerElement);
//   gameContainerElement.appendChild(levelElement);

//   const updateGame = (state) => {
//     headerElement.innerHTML = templateHeader(state);
//     headerElement.querySelector(`header`).insertAdjacentElement(`afterbegin`, templateButtonBack);
//     levelElement.innerHTML = templateGame(gameData[Types[gameTypes[state.level]]], state.stats);
//   };

//   updateGame(gameState);

//   const changeGameLevel = () => {
//     gameState.level += 1;

//     updateGame(gameState);
//     showScreen(gameContainerElement);
//   };

//   const checkRadio = (options) => {
//     const answers = new Set();
//     options.forEach((it) => {
//       it.addEventListener(`change`, () => {
//         if (it.checked) {
//           answers.add(it.name);
//           if ([...answers].length === (options.length / 2)) {
//             changeGameLevel();
//           }
//         }
//       });
//     });
//   };

//   const checkPicrure = (options) => {
//     options.forEach((it) => {
//       it.addEventListener(`click`, (evt) => {
//         evt.preventDefault();
//         it.classList.add(`game__option--selected`);
//         changeGameLevel();
//       });
//     });
//   };

//   switch (type) {
//     case `oneImage`:
//       const radio1 = gameContainerElement.querySelectorAll(`input[type=radio]`);
//       checkRadio(radio1);
//       break;

//     case `twoImages`:
//       const radio2 = gameContainerElement.querySelectorAll(`input[type=radio]`);
//       checkRadio(radio2);
//       break;

//     case `threeImages`:
//       const picturesOptions = gameContainerElement.querySelectorAll(`.game__option`);
//       checkPicrure(picturesOptions);
//       break;
//   }

//   showScreen(gameContainerElement);
// };
