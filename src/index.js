import "./css/style.css";
import { getWeather } from "./js/homepage.js";

const searchWeatherForm = document.getElementById('search-weather-form');

searchWeatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = searchWeatherForm.elements['location-input'].value;

    getWeather(location);
});

