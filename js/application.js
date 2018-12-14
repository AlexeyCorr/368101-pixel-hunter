import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import ResultScreen from './screens/result-screen';
import ConfirmPopupScreen from './screens/confirm-popup-screen';
import GameModel from './data/game-model';
import GameScreen from './screens/game-screen';
import LoadingView from './views/loading-view';
import ErrorPopupView from './views/error-popup-view';

const confirmPopup = new ConfirmPopupScreen();

const main = document.querySelector(`main`);
const body = document.querySelector(`body`);

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

const showPopup = (element) => body.appendChild(element);
const hidePopup = (element) => body.removeChild(element);

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};
let gameData;
class Application {

  static startGame(playerName) {
    const loading = new LoadingView();
    changeView(loading.element);
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`)
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => gameData = data)
      .then((gameData) => Application.showGame(gameData, playerName))
      .catch((error) => Application.showErrorPopup(error));
  }

  static showIntro() {
    const intro = new IntroScreen();
    changeView(intro.element);
  }

  static showWelcome() {
    const welcome = new WelcomeScreen();
    changeView(welcome.element);
  }

  static showRules() {
    const rules = new RulesScreen();
    changeView(rules.element);
  }

  static showGame(gameData, playerName) {
    const gameScreen = new GameScreen(new GameModel(gameData, playerName));
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showResult(model) {
    const results = new ResultScreen(model);
    changeView(results.element);
  }

  static showErrorPopup(message) {
    const errorPopup = new ErrorPopupView(message);
    showPopup(errorPopup.element);
  }

  static showConfirmPopup() {
    showPopup(confirmPopup.element);
  }

  static hideConfirmPopup() {
    hidePopup(confirmPopup.element);
  }
};

export default Application;
