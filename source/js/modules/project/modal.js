import {initForm} from './validation.js';

const openModalWindow = () => {
  const INTERECTIVE_ELEMENTS = ['button', 'a', 'input', 'textarea', '[tabindex]'];
  const interactiveElementsArr = document.querySelectorAll(INTERECTIVE_ELEMENTS);

  const modalButton = document.querySelector('.header__button');
  modalButton.removeAttribute('href');
  const modalWindow = document.querySelector('.modal');
  const modalInteractiveElements = modalWindow.querySelectorAll(INTERECTIVE_ELEMENTS);
  const closeButton = document.querySelector('.modal__close-button');

  modalButton.addEventListener('click', () => {
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
};

export {openModalWindow};
