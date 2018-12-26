import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import Loader from './loader';
import RulesScreen from './screens/rules-screen';
import ResultScreen from './screens/result-screen';
import GameModel from './data/game-model';
import GameScreen from './screens/game-screen';
import ErrorPopupView from './views/error-popup-view';
import SplashView from './views/splash-view';
import {preloadImage} from './data/game';

const main = document.querySelector(`main`);

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

let gameData;
let images;

class Application {
  static async load() {
    const intro = new IntroScreen();
    const splash = new SplashView();
    changeView(intro.element);
    splash.show();
    try {
      gameData = await Loader.loadData();
      images = await Promise.all(preloadImage(gameData));
      Application.showWelcome();
    } catch (error) {
      Application.showErrorPopup(error);
    } finally {
      splash.element.remove();
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
    const gameScreen = new GameScreen(new GameModel(gameData, playerName), images);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static async showResult(model) {
    const playerName = model.playerName;
    const splash = new SplashView();
    splash.show();
    try {
      await Loader.saveResult(playerName, model);
      const results = new ResultScreen(await Loader.loadResult(playerName));
      changeView(results.element);
    } catch (error) {
      Application.showErrorPopup(error);
    } finally {
      splash.element.remove();
    }
  }

  static showErrorPopup(message) {
    const errorPopup = new ErrorPopupView(message);
    errorPopup.show();
  }
}

export default Application;
