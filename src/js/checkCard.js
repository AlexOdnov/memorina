import stopGame from './stopGame';

let prevCard = null;
let score = document.forms.controls.score;

const checkCard = () => {
  let currentCard = event.target.closest('.card--playable');

  if (!currentCard || currentCard.classList.contains('card--active')) {
    return;
  }

  currentCard.classList.add('card--active');

  if (!prevCard) {
    prevCard = currentCard;
    return;
  }
  if (prevCard.dataset.number !== currentCard.dataset.number) {
    score.value = +score.value - 50;
    let currentCard2 = prevCard;
    prevCard = null;
    setTimeout(() => {
      currentCard2.classList.remove('card--active');
      currentCard.classList.remove('card--active');
    }, 1000);
    return;
  }
  if (prevCard.dataset.number === currentCard.dataset.number) {
    score.value = +score.value + 200;
    let currentCard2 = prevCard;
    prevCard = null;
    setTimeout(() => {
      currentCard2.className = 'card card--placeholder';
      currentCard.className = 'card card--placeholder';
    }, 1000);
  }
  setTimeout(() => {
    if (!document.querySelectorAll('.card--playable').length) {
      stopGame();
    }
  }, 3000);
};

export default checkCard;
