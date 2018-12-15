import AbstractView from './../abstract-view';

class LoadingView extends AbstractView {

  get template() {
    return `
      <div class="loading">
        <h1 class="loading__title">Loading...</h1>
        <svg class="loading__circle" x="0px" y="0px" viewBox="0 0 150 150">
          <circle class="loading__inner" cx="75" cy="75" r="60"/>
        </svg>
      </div>`;
  }
}

export default LoadingView;
