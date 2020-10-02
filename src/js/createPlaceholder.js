const createPlaceholder = (amount) => {
  if (amount !== '14' && amount !== '18') {
    return;
  }

  const playground = document.querySelector('.playground');
  const placeholder = document.createElement('div');

  placeholder.insertAdjacentHTML(
    'afterbegin',
    '<div class="card__cover"></div>'
  );
  placeholder.className = 'card card--placeholder';

  if (amount === '14') {
    placeholder.classList.add('card--placeholder-14');
  } else if (amount === '18') {
    placeholder.classList.add('card--placeholder-18');
  }

  playground.append(placeholder);
};

export default createPlaceholder;
