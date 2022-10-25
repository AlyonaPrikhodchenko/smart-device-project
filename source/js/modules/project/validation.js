import {makeMaskPhoneNumber} from './mask-tel.js';
import {resetDefaultForm} from './reset-default-form.js';

const initForm = (myForm) => {
  if (myForm) {
    makeMaskPhoneNumber(myForm);
    resetDefaultForm(myForm);
  }
};

export {initForm};
