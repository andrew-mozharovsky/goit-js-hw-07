const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const onButtonClickIncrement = () => {
  let valueRef = Number(document.querySelector('#counter #value').textContent);
  valueRef += 1;
  document.querySelector('#counter #value').textContent = valueRef;
};
const onButtonClickDecrement = () => {
  let valueRef = Number(document.querySelector('#counter #value').textContent);
  valueRef -= 1;
  document.querySelector('#counter #value').textContent = valueRef;
};

decrementButton.addEventListener('click', onButtonClickDecrement);

incrementButton.addEventListener('click', onButtonClickIncrement);
