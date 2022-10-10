const mapContainer = document.getElementsByClassName("map");
const home = document.getElementsByClassName("home");
const menuContainer = document.getElementsByClassName("menu-container");

const createHome = (e) => {
  e.preventDefault();
  mapContainer[0].style.display = "none";
  home[0].style.display = "flex";
  menuContainer[0].style.display = "none";
};

export { createHome };
