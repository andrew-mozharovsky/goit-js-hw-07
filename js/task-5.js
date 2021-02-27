const inputRef = document.querySelector('#name-input');

const onImputChenge = () => {
  document.querySelector('#name-output').textContent =
    event.currentTarget.value;
};

inputRef.addEventListener('input', onImputChenge);
