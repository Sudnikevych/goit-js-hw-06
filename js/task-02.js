const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const liElement = document.createElement("li");

  liElement.classList.add("item");
  liElement.textContent = `${ingredient}`;

  return liElement;
});

list.append(...elements);

console.log(elements);
