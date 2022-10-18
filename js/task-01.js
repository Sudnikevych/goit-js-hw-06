const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const titleCategory = item.querySelector("h2");
  const itemList = item.querySelectorAll("li");

  console.log(
    `Category: ${titleCategory.textContent} \nElements: ${itemList.length}`
  );
});
