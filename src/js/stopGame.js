import { btnStart } from './toggleBtn';
import checkCard from './checkCard';

const stopGame = () => {
  if (event) {
    event.preventDefault();
  }

  const playground = document.querySelector('.playground');

  playground.removeEventListener('click', checkCard);
  playground.classList.add('playground--covered');
  setTimeout(() => {
    playground.className = 'playground game__playground playground--covered';
    playground.innerHTML = '';
  }, 500);

  btnStart();
};

export default stopGame;
