const home = document.getElementsByClassName("home");
const content = document.getElementById("content");
const mapContainer = document.createElement("div");
const menuContainer = document.getElementsByClassName("menu-container");

const createContact = () => {
  const map = document.createElement("iframe");
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.0322787299!2d-77.12786341191499!3d-12.026267592989917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1665367903354!5m2!1ses-419!2spe";
  content.appendChild(mapContainer).classList.add("map");
  mapContainer.appendChild(map);
  map.setAttribute("src", src);
  map.setAttribute("loading", "lazy");
  map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
};

const showMap = (e) => {
  e.preventDefault();
  menuContainer[0].style.display = "none";
  mapContainer.style.display = "flex";
  home[0].style.display = "none";
};

export { createContact, showMap };
