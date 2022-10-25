const resetDefaultForm = (form) => {
  const formBlock = form.querySelector('form');

  formBlock.addEventListener('submit', (evt) => {
    evt.preventDefault();
    evt.target.reset();
  });
};

export {resetDefaultForm};
