import createCard from './createCard';

const fillPlayground = (amount) => {
  const playground = document.querySelector('.playground');
  const cardList = [];

  for (let i = 1; i <= amount; i++) {
    cardList.push(createCard(Math.ceil(i / 2)));
  }

  playground.classList.add(`playground--${amount}`);
  playground.append(...cardList);
};

export default fillPlayground;
