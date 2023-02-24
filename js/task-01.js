
const categories = document.querySelector('#categories');
const items = categories.children;

console.log(`Number of categories: ${items.length}`);

Array.from(items).forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});