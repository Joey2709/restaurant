import { createMenu } from "./menu";
import { createContact, showMap } from "./contact";
import { createHome } from "./home.js";

const content = document.getElementById("content");

const home = document.createElement("div");
const nav = document.createElement("div");
const menuNav = document.createElement("a");
const contactNav = document.createElement("a");
const homeNav = document.createElement("a");
const logo = document.createElement("h2");

content.appendChild(nav).classList.add("nav");
content.appendChild(home).classList.add("home");

home.appendChild(logo).classList.add("logo");

nav.appendChild(homeNav).classList.add("home-nav");
nav.appendChild(menuNav).classList.add("menu-nav");
nav.appendChild(contactNav).classList.add("contact-nav");

logo.textContent = "Foodelicious";
menuNav.textContent = "Menu";
contactNav.textContent = "Contact";
homeNav.textContent = "Home";

menuNav.setAttribute("href", "");
contactNav.setAttribute("href", "");
homeNav.setAttribute("href", "");

homeNav.addEventListener("click", createHome);
menuNav.addEventListener("click", createMenu);
contactNav.addEventListener("click", showMap);

createContact();
