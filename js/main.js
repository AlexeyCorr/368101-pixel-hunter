import {showScreen, container} from './util';
import {introScreen, rulesScreen} from './screens/index';
import {templateFooter} from './template/index'

showScreen(rulesScreen);
container.insertAdjacentHTML(`afterend`, templateFooter);
