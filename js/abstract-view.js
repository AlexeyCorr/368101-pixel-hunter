const createElement = (template = ``, tagName = `div`) => {
  const wrapper = document.createElement(tagName);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }

    this._element = null;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
  if (this._element === null) {
    this._element = this.render();
    this.bind();
  }

  return this._element;
  }

  render() {
    return createElement(this.template);
  }

  bind() {
    // bind handlers if required
  }
}

export default AbstractView;
