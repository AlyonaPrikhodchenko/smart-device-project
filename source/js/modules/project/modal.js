import {initForm} from './validation';

const openModalWindow = () => {
  const modalButton = document.querySelector('.header__button');
  modalButton.removeAttribute('href');
  const modalWindow = document.querySelector('.modal');
  const closeButton = document.querySelector('.modal__close-button');

  modalButton.addEventListener('click', () => {
    document.body.style.position = 'fixed';
    modalWindow.classList.remove('modal--close');

    const form = modalWindow.querySelector('.form-modal');
    const inputName = form.querySelector('input[type=text]');
    inputName.focus();
    initForm(form);
  });

  closeButton.addEventListener('click', () => {
    document.body.style.position = 'static';
    modalWindow.classList.add('modal--close');
  });
};

export {openModalWindow};
