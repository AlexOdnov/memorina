import { btnStop } from './toggleBtn';
import fillPlayground from './fillPlayground';
import createPlaceholder from './createPlaceholder';
import checkCard from './checkCard';

const startGame = () => {
  event.preventDefault();

  const playground = document.querySelector('.playground');
  const amount = document.forms.controls.cardAmount.value;
  const score = document.forms.controls.score;

  score.value = 0;

  btnStop();
  fillPlayground(amount);
  createPlaceholder(amount);

  playground.addEventListener('click', checkCard);
  playground.classList.remove('playground--covered');
};

export default startGame;
