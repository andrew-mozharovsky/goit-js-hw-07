const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#counter #value');

const onButtonClickIncrement = () => {
  let valueRef = Number(counterValueRef.textContent);
  valueRef += 1;
  counterValueRef.textContent = valueRef;
};
const onButtonClickDecrement = () => {
  let valueRef = Number(counterValueRef.textContent);
  valueRef -= 1;
  counterValueRef.textContent = valueRef;
};

decrementButtonRef.addEventListener('click', onButtonClickDecrement);

incrementButtonRef.addEventListener('click', onButtonClickIncrement);
