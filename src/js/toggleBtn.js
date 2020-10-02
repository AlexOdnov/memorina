import startGame from './startGame';
import stopGame from './stopGame';

const btn = document.querySelector('.btn');

const btnStop = () => {
  btn.removeEventListener('click', startGame);
  btn.addEventListener('click', stopGame);
  btn.classList.remove('btn--start');
  btn.classList.add('btn--stop');
};

const btnStart = () => {
  btn.removeEventListener('click', stopGame);
  btn.addEventListener('click', startGame);
  btn.classList.remove('btn--stop');
  btn.classList.add('btn--start');
};

export { btnStart, btnStop };
