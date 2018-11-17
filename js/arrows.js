import {render} from './util';

const template =
  `<div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 95px;
        left: 50%;
        transform: translateX(-50%);
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn arrows__btn--left"><-</button>
    <button class="arrows__btn arrows__btn--right">-></button>
  </div>`;


const element = render(template);

export default element;
