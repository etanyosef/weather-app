import "./css/style.css";
import { renderHomepage } from "./js/homepage.js";

const homeBtn = document.getElementById("home-btn");

renderHomepage();
homeBtn.classList.add("active");

homeBtn.addEventListener("click", () => {
    homeBtn.classList.add("active");
    renderHomepage();
});
