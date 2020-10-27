import { createCard } from './createCard';
import { createPlaceholder } from './createPlaceholder';

export class Game {
  constructor() {
    this.playground = document.querySelector('.playground');
    this.btn = document.querySelector('.btn');
    this.cardAmount = document.forms.controls.cardAmount;
    this.score = document.forms.controls.score;
    this.isGameStarted = false;
    this.cardCounter = null;
    this.prevCard = null;
    this.init();
  }

  init() {
    this.btn.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        this.toggleGame();
      }.bind(this)
    );
    this.playground.addEventListener('click', this.checkCard.bind(this));
  }

  startGame() {
    const cardAmount = +this.cardAmount.value;
    this.score.value = 0;
    this.cardCounter = cardAmount;

    this.fillPlayground(cardAmount);
    if (cardAmount === 14 || cardAmount === 18) {
      this.playground.append(createPlaceholder(cardAmount));
    }
    this.playground.classList.remove('playground--covered');
  }

  stopGame() {
    this.playground.classList.add('playground--covered');
    setTimeout(() => {
      this.playground.className =
        'playground game__playground playground--covered';
      this.playground.innerHTML = '';
    }, 500);
  }

  toggleGame() {
    if (!this.isGameStarted) {
      this.isGameStarted = true;
      this.startGame();
      this.btn.classList.remove('btn--start');
      this.btn.classList.add('btn--stop');
    } else {
      this.isGameStarted = false;
      this.stopGame();
      this.btn.classList.remove('btn--stop');
      this.btn.classList.add('btn--start');
    }
  }

  fillPlayground(cardAmount) {
    const cardList = [];

    for (let i = 1; i <= cardAmount; i++) {
      cardList.push(createCard(Math.ceil(i / 2)));
    }

    this.playground.classList.add(`playground--${cardAmount}`);
    this.playground.append(...cardList);
  }

  checkCard(e) {
    const currentCard = e.target.closest('.card--playable');

    if (!currentCard || currentCard.classList.contains('card--active')) {
      return;
    }

    currentCard.classList.add('card--active');

    if (!this.prevCard) {
      this.prevCard = currentCard;
      return;
    }

    if (this.prevCard.dataset.number !== currentCard.dataset.number) {
      const prevCard = this.prevCard;
      this.score.value = +this.score.value - 50;
      this.prevCard = null;
      setTimeout(() => {
        prevCard.classList.remove('card--active');
        currentCard.classList.remove('card--active');
      }, 1000);
      return;
    }

    if (this.prevCard.dataset.number === currentCard.dataset.number) {
      const prevCard = this.prevCard;
      this.score.value = +this.score.value + 200;
      this.prevCard = null;
      this.cardCounter -= 2;
      if (!this.cardCounter) {
        setTimeout(() => {
          this.toggleGame();
        }, 2000);
      }
      setTimeout(() => {
        prevCard.className = 'card card--placeholder';
        currentCard.className = 'card card--placeholder';
      }, 1000);
    }
  }
}
