import templateOption from './template-option';
import templateStats from './template-stats';

export default (data, stats = ``) => {
  return `<section class="game">
    <p class="game__task">${data.description}</p>
    <form class="game__content  ${data.viewClass}">
      ${data.options.map((it) =>
    `<div class="game__option">
      ${templateOption[data.type](it.src, it.index)}</div>`)
      .join(``)}
    </form>
    ${templateStats(stats)}
  </section>`;
};
