import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import StatsScreen from './screens/stats-screen';
import ConfirmPopupScreen from './screens/comfirm-popup-screen';

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

  // static showGame(playerName) {
  //   const gameScreen = new GameScreen(new QuestModel(playerName));
  //   changeView(gameScreen.element);
  //   gameScreen.startGame();
  // }

  static showStats() {
    const statistics = new StatsScreen();
    changeView(statistics.element);
  }

  static showConfirmPopup() {
    body.appendChild(confirmPopup.element);
  }

  static hideConfirmPopup() {
    body.removeChild(confirmPopup.element);
  }
};

export default Application;
