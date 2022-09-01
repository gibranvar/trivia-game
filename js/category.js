"use strict"
const renderCategories = (data) => {

  //aqui
  let categoriesOption = document.querySelector("#categories");
  let { trivia_categories } = data;
  
  
  trivia_categories.forEach((gen) => {
    // console.log(gen);
    
    // Creamos el nuevo elemento <option>
    let option = document.createElement("option");
    // Agregamos el atributo "value"
    option.setAttribute("value", gen.id);
    option.classList.add("categories-option")
    // Agregamos el texto que corresponde
    option.innerText = gen.name;
    // Insertamos el <option> generado dentro del elemento <select>
    categoriesOption.appendChild(option);
    
  });

};


fetch("https://opentdb.com/api_category.php")
  .then((response) => response.json())
  .then((data) => renderCategories(data));
