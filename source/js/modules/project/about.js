const content = document.querySelector('.js-about-content-text');
const button = document.querySelector('.js-button');
const buttonText = document.querySelectorAll('.js-button-text');
const textSpan = document.querySelector('.js-text');

const openDescription = () => {
  button.addEventListener('click', () => {
    content.classList.toggle('js-hidden');
    textSpan.classList.toggle('js-text-hidden');

    buttonText.forEach((text) => {
      if (text.classList.contains('js-hidden')) {
        text.classList.remove('js-hidden');
      } else {
        text.classList.add('js-hidden');
      }
    });
  });
};

export { openDescription };
