const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  let listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  listIngredients.appendChild(listItem);
});