"use strict";
const renderCategories = (data) => {
  let categoriesOption = document.querySelector("#categories");
  let { trivia_categories } = data;

  trivia_categories.forEach((gen) => {
    let option = document.createElement("option");
    option.setAttribute("value", gen.id);
    option.classList.add("categories-option");
    option.innerText = gen.name;
    categoriesOption.appendChild(option);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://opentdb.com/api_category.php")
  .then((response) => response.json())
  .then((data) => renderCategories(data));
});

