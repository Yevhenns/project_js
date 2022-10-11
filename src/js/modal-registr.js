import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModalSignUpEl = document.querySelector('#signup-btn');
const openModalLogInEl = document.querySelector('#login-btn');

const openModal = document.querySelector('#login');
openModal.addEventListener('click', toggleModal);

const markupModalLogIn = basicLightbox.create(
  document.querySelector('#modal-welcome')
);

function toggleModal() {
  markupModalLogIn.show();

  window.addEventListener('keydown', onEscKeyPress);
  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      markupModalLogIn.close();
    }
  }
}

openModalSignUpEl.addEventListener('click', onSignUp);
openModalLogInEl.addEventListener('click', onLogIn);

const markupModalSignUp = basicLightbox.create(
  document.querySelector('#modal-singup')
);
function onSignUp() {
  markupModalSignUp.show();

  window.addEventListener('keydown', onEscKeyPress);
  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      markupModalSignUp.close();
    }
  }

  markupModalLogIn.close();
}

function onLogIn() {
  markupModalLogIn.show();
  markupModalSignUp.close();
}

openModalSignUpEl.addEventListener('click', onSignUp);
openModalLogInEl.addEventListener('click', onLogIn);
// export { toggleModal, onSignUp, onLogIn };

const registrationForm = markupModalSignUp
  .element()
  .querySelector('#registration-form');

const registrationFormName = markupModalSignUp
  .element()
  .querySelector('#registration-form-name');

const registrationFormEmail = markupModalSignUp
  .element()
  .querySelector('#registration-form-email');

const registrationFormPassword = markupModalSignUp
  .element()
  .querySelector('#registration-form-password');

const loginForm = markupModalLogIn.element().querySelector('#login-form');

const loginFormName = markupModalLogIn
  .element()
  .querySelector('#login-form-name');

const loginFormEmail = markupModalLogIn
  .element()
  .querySelector('#login-form-email');

const loginFormPassword = markupModalLogIn
  .element()
  .querySelector('#login-form-password');

function onCloseModal() {
  markupModalLogIn.close();
  markupModalSignUp.close();
}
export {
  registrationForm,
  registrationFormName,
  registrationFormEmail,
  registrationFormPassword,
  loginForm,
  loginFormName,
  loginFormEmail,
  loginFormPassword,
  onCloseModal,
};
