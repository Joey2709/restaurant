const home = document.getElementsByClassName("home");
const content = document.getElementById("content");
const mapContainer = document.getElementsByClassName("map");

var descripcionHamburguesas = [
  "Burger Simple",
  "Burger Doble Meat",
  "Burger Hawaiana",
  "Burger Cheese and Meat",
  "Burger Chicken",
  "Burger Meat and Bacon",
];

var descripcionBebidas = [
  "Inca kola Zero 500 ml",
  "Sprite Original 500 ml",
  "Agua San Luis S/A",
  "Coca Cola Zero 500 ml",
  "Inca Kola Original 500 ml",
  "Coca Cola Original 500 ml",
];

var descripcionHelados = [
  "Ice Cream caramel sauce",
  "Ice Cream Chocolat",
  "Ice Cream Strawberry",
  "Cone Chocolat",
  "Cone Chocolat and Milk",
  "Cone Vanilla",
];

const menuContainer = document.createElement("div");
content.appendChild(menuContainer).classList.add("menu-container");

const containerButtons = document.createElement("div");
menuContainer.appendChild(containerButtons).classList.add("buttons-container");

const menu = document.createElement("div");
menuContainer.appendChild(menu).classList.add("menu");

const buttonHamburguesas = document.createElement("button");
containerButtons.appendChild(buttonHamburguesas).setAttribute("type", "button");
const buttonBebidas = document.createElement("button");
containerButtons.appendChild(buttonBebidas).setAttribute("type", "button");
const buttonHelados = document.createElement("button");
containerButtons.appendChild(buttonHelados).setAttribute("type", "button");

buttonHamburguesas.textContent = "Burguers 🍔";
buttonBebidas.textContent = "Beverages 🥤";
buttonHelados.textContent = "Ice Creams 🍨";

const createMenu = (e) => {
  e.preventDefault();
  home[0].style.display = "none";
  mapContainer[0].style.display = "none";
  menuContainer.style.display = "flex";

  function createHamburguesas() {
    menu.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      const container = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h2");
      menu.appendChild(container);
      container.appendChild(title);
      container
        .appendChild(img)
        .setAttribute("src", `../src/img/menu-${i + 1}.png`);
      title.textContent = descripcionHamburguesas[i];
    }
  }

  function createBebidas() {
    menu.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      const container = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h2");
      menu.appendChild(container);
      container.appendChild(title);
      container
        .appendChild(img)
        .setAttribute("src", `../src/img/bebida-${i + 1}.png`);
      title.textContent = descripcionBebidas[i];
    }
  }

  function createHelados() {
    menu.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      const container = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h2");
      menu.appendChild(container);
      container.appendChild(title);
      container
        .appendChild(img)
        .setAttribute("src", `../src/img/helado-${i + 1}.png`);
      title.textContent = descripcionHelados[i];
    }
  }

  createHamburguesas();

  buttonHamburguesas.addEventListener("click", createHamburguesas);
  buttonBebidas.addEventListener("click", createBebidas);
  buttonHelados.addEventListener("click", createHelados);
};

export { createMenu };
