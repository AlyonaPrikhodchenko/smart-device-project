const initAccordion = () => {
  const buttons = document.querySelectorAll('.footer__title');
  const contentBlocks = document.querySelectorAll('.footer__content');

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.classList.add('footer__accordion-name', 'footer__accordion-name--close');
    const contentBlock = contentBlocks[i];
    contentBlock.classList.add('footer__accordion-content');

    button.addEventListener('click', () => {
      if (parseInt(contentBlock.style.height, 10) !== contentBlock.scrollHeight) {
        contentBlock.style.marginBottom = '20px';
        contentBlock.style.height = contentBlock.scrollHeight + 'px';
        button.classList.remove('footer__accordion-name--close');
      } else {
        contentBlock.style.marginBottom = '0';
        contentBlock.style.height = '0px';
        button.classList.add('footer__accordion-name--close');
      }

      for (let j = 0; j < contentBlocks.length; j++) {
        if (j !== i) {
          contentBlocks[j].style.marginBottom = '0';
          contentBlocks[j].style.height = '0px';
          buttons[j].classList.add('footer__accordion-name--close');
        }
      }
    });
  }
};

export { initAccordion };
