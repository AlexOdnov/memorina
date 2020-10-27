export const createPlaceholder = (amount) => {
  const placeholder = document.createElement('div');

  placeholder.insertAdjacentHTML(
    'afterbegin',
    '<div class="card__cover"></div>'
  );
  placeholder.className = 'card card--placeholder';

  if (amount === 14) {
    placeholder.classList.add('card--placeholder-14');
  } else if (amount === 18) {
    placeholder.classList.add('card--placeholder-18');
  }

  return placeholder;
};
