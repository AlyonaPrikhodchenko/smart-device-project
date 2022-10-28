import {initForm} from './validation.js';

const openModalWindow = () => {
  const modalButton = document.querySelector('.header__button');
  const modalWindow = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal__wrapper');
  const INTERECTIVE_ELEMENTS = ['button', 'a', 'input', 'textarea', '[tabindex]'];
  const interactiveElementsArr = document.querySelectorAll(INTERECTIVE_ELEMENTS);
  const modalInteractiveElements = modalWindow.querySelectorAll(INTERECTIVE_ELEMENTS);

  if (modalButton && modalWindow) {
    const closeButton = document.querySelector('.modal__close-button');

    modalContent.addEventListener('click', (evt) => evt.stopPropagation());

    modalButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      document.body.style.position = 'fixed';
      modalWindow.classList.remove('modal--close');


      interactiveElementsArr.forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });

      modalInteractiveElements.forEach((element) => {
        element.setAttribute('tabindex', '1');
      });


      const form = modalWindow.querySelector('.form-modal');
      initForm(form);
      const inputName = form.querySelector('input[type=text]');
      inputName.focus();
    });

    closeButton.addEventListener('click', () => {
      document.body.style.position = 'static';
      modalWindow.classList.add('modal--close');

      interactiveElementsArr.forEach((element) => {
        element.setAttribute('tabindex', '1');
      });

      modalInteractiveElements.forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    });

    modalWindow.addEventListener('click', () => {
      document.body.style.position = 'static';
      modalWindow.classList.add('modal--close');

      interactiveElementsArr.forEach((element) => {
        element.setAttribute('tabindex', '1');
      });

      modalInteractiveElements.forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    });
  }

};

export {openModalWindow};
