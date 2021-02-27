const inputRef = document.querySelector('#validation-input');
const isInputValid = () => {
  if (
    Number(inputRef.getAttribute('data-length')) !==
    event.currentTarget.value.length
  ) {
    inputRef.classList.add('invalid');
    if (inputRef.classList.contains('valid')) {
      inputRef.classList.remove('valid');
    }
  } else {
    inputRef.classList.replace('invalid', 'valid');
  }
};
inputRef.addEventListener('blur', isInputValid);
