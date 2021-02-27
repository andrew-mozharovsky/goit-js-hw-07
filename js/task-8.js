const boxeRef = document.querySelector('#boxes');
const buttonRenderRef = document.querySelector('[data-action="render"]');
const buttonDestroyRef = document.querySelector('[data-action="destroy"]');
const inputValue = document.querySelector('#controls > input');
let amount = 0;
const inputCenge = function (event) {
  amount = event.currentTarget.value;
};
inputValue.addEventListener('input', inputCenge);

buttonRenderRef.addEventListener('click', () => {
  for (let i = 1, boxSize = 30; i <= amount; i += 1, boxSize += 10) {
    boxeRef.insertAdjacentHTML(
      'beforeend',
      `<div style= "width: ${boxSize}px; height: ${boxSize}px;  background-color: rgb(${Math.floor(
        Math.random() * 255,
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255,
      )}); margin: 5px"></div>`,
    );
  }
});
buttonDestroyRef.addEventListener('click', () => {
  boxeRef.innerHTML = '';
});
