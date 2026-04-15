export const convertToCelcius = (temp) => {
    const convert = (temp - 32) * 5/9;
    return roundTemperature(convert);
}

export const convertToFahrenheit = (temp) => {
    const convert = (temp * 1.8) + 32;
    return roundTemperature(convert);
}

function roundTemperature(temperature) {
    return Math.round(temperature * 10) / 10;
}

export function displayCelcius() {
    const temps = document.querySelectorAll('.temp.fahrenheit');

    if(temps.length === 0) return;

    temps.forEach( (temp) => {
        const celcius = convertToCelcius(temp.textContent);
    
        temp.textContent = celcius;
        temp.classList.remove('fahrenheit');
        temp.classList.add('celcius');
    });
}

export function displayFahrenheit() {
    const temps = document.querySelectorAll('.temp.celcius');

    if(temps.length === 0) return;

    temps.forEach( (temp) => {
        const fahrenheit = convertToFahrenheit(temp.textContent);

        temp.textContent = fahrenheit;    
        temp.classList.remove('celcius');
        temp.classList.add('fahrenheit');
    });
}

export function displayActiveTemp() {
    const activeTemp = document.querySelector('.temp-toggle-container button.active').textContent;
    if(activeTemp === '°C') {
        displayCelcius();
    } else {
        displayFahrenheit();
    }
}