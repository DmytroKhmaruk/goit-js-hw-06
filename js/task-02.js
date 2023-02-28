const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

listIngredients.insertAdjacentHTML('beforeend', ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join(''));