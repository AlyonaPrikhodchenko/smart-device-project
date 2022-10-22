const content = document.querySelector('.about__content-text-hidden');
const button = document.querySelector('.about__button');
const buttonText = document.querySelectorAll('.about__button-text');
const textMobile = document.querySelector('.about__text');

const openDescription = () => {
  button.addEventListener('click', () => {
    content.classList.toggle('hidden');
    textMobile.classList.toggle('about__text--hidden');

    buttonText.forEach((text) => {
      if (text.classList.contains('hidden')) {
        text.classList.remove('hidden');
      } else {
        text.classList.add('hidden');
      }
    });
  });
};

export { openDescription };
