const listRef = document.querySelector('#categories');

const categoryCount = list =>
  console.log(`В списке: ${list.children.length} категории`);

categoryCount(listRef);

const elementTitle = listTitle => {
  [...listTitle].map(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}`);
    console.log(
      `Количество элементов: ${element.querySelector('ul').children.length}`,
    );
  });
};

elementTitle(listRef.children);
