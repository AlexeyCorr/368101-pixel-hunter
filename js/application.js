import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import Loader from './loader';
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

let gameData;

class Application {
  static async load() {
    const intro = new IntroScreen();
    changeView(intro.element);
    try {
      gameData = await Loader.loadData();
      Application.showWelcome();
    } catch (error) {
      Application.showErrorPopup(error);
    }
  }

  static showWelcome() {
    const welcome = new WelcomeScreen();
    changeView(welcome.element);
  }

  static showRules() {
    const rules = new RulesScreen();
    changeView(rules.element);
  }

  static showGame(playerName) {
    const gameScreen = new GameScreen(new GameModel(gameData, playerName));
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static async showResult(model) {
    const playerName = model.playerName;
    const loading = new LoadingView();
    changeView(loading.element);
    try {
      await Loader.saveResult(playerName, model);
      const results = new ResultScreen(await Loader.loadResult(playerName));
      changeView(results.element);
    } catch (error) {
      Application.showErrorPopup(error);
    }
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
