import { getRandomNumber } from './getRandomNumber';

export const createCard = (number) => {
  const card = document.createElement('div');
  const cardContent = `<div class="card__cover"></div>
  <div class="card__face">${number}</div>`;

  card.className = 'card card--playable';
  card.insertAdjacentHTML('afterbegin', cardContent);
  card.style.order = getRandomNumber(1, 20);
  card.dataset.number = number;

  return card;
};
