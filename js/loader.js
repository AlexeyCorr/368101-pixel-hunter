const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = `44499933`;
const DEFAULT_NAME = `Kek`;

const checkStatus = (response) => {
  if (response.status < 200 || response.status > 300) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response;
};

const toJSON = (response) => response.json();

class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then(checkStatus).then(toJSON);
  }

  static loadResult(playerName = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${playerName}`).then(checkStatus).then(toJSON);
  }

  static saveResult(playerName, data) {
    data = Object.assign({playerName}, data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${playerName}`, requestSettings).then(checkStatus);
  }
}

export default Loader;
