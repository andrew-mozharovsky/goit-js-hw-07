const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = listElement => {
  return listElement.map(element => {
    const addElem = document.createElement('li');
    addElem.textContent = element;
    return addElem;
  });
};

document.querySelector('#ingredients').append(...createList(ingredients));
