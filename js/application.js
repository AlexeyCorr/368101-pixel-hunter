import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import ResultScreen from './screens/result-screen';
import ConfirmPopupScreen from './screens/confirm-popup-screen';
import GameModel from './data/game-model';
import GameScreen from './screens/game-screen';

const confirmPopup = new ConfirmPopupScreen();
const main = document.querySelector(`main`);
const body = document.querySelector(`body`);

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

class Application {

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

  static showGame(playerName) {
    const gameScreen = new GameScreen(new GameModel(playerName));
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showResult(model) {
    const results = new ResultScreen(model);
    changeView(results.element);
  }

  static showConfirmPopup() {
    body.appendChild(confirmPopup.element);
  }

  static hideConfirmPopup() {
    body.removeChild(confirmPopup.element);
  }
};

export default Application;
