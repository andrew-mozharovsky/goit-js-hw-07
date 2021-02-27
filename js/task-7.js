const rareRef = document.querySelector('#font-size-control');
const testRef = document.querySelector('#text');

rareRef.addEventListener(
  'input',
  () => (testRef.style.fontSize = `${event.currentTarget.value}px`),
);
