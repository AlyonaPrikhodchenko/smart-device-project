const openModalWindow = () => {
  const modalButton = document.querySelector('.header__button');
  const modalWindow = document.querySelector('.modal');
  const closeButton = document.querySelector('.modal__close-button');

  modalButton.addEventListener('click', () => {
    modalWindow.classList.remove('modal--close');
  });

  closeButton.addEventListener('click', () => {
    modalWindow.classList.add('modal--close');
  });
};

export { openModalWindow };
