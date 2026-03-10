import "./css/style.css";
import { renderHomepage } from "./js/homepage.js";
import { renderMenu } from "./js/menu.js";
import { renderAbout } from "./js/about.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

renderHomepage();
homeBtn.classList.add("active");

homeBtn.addEventListener("click", () => {
    homeBtn.classList.add("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    renderHomepage();
});
menuBtn.addEventListener("click", () => {
    homeBtn.classList.remove("active");
    menuBtn.classList.add("active");
    aboutBtn.classList.remove("active");
    renderMenu();
});
aboutBtn.addEventListener("click", () => {
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.add("active");
    renderAbout();
});

console.log("Hello World!");
