import "./css/style.css";
import { getWeather } from "./js/homepage.js";
import { pointerScroll } from "./js/drag-scroll.js";

const content = document.getElementById('content');
const loader = document.querySelector('.loader');
const searchWeatherForm = document.getElementById('search-weather-form');

searchWeatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const location = searchWeatherForm.elements['location-input'].value;

    // clear content div
    content.textContent = '';

    // display loading while getWeather is fetching data
    loader.style.display = 'block';
    await getWeather(location);
    loader.style.display = 'none';

    document.querySelectorAll('.draggable').forEach(pointerScroll);
});



