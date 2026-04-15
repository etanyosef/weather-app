import { pointerScroll, handleCarouselMove } from "./drag-scroll";

const APIKey = 'SB5H8XPWXTETBEG5F5FAZCP9M';

const content = document.getElementById('content');

export async function getWeather(location) {
    try {
        const queryURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${APIKey}`;
        const response = await fetch(queryURL);
        const queryData = await response.json();

        console.log(queryData);

        displayWeather(queryData);
    } catch(error) {
        console.log(error);
    }
}

function getWeatherData(queryData) {
    const weatherData = {
        address: queryData.resolvedAddress,
        currentConditions : {
            conditions: queryData.currentConditions.conditions,
            dew: queryData.currentConditions.dew,
            feelsLike: queryData.currentConditions.feelslike,
            humidity: queryData.currentConditions.humidity,
            icon: queryData.currentConditions.icon,       
            pressure: queryData.currentConditions.pressure,         
            sunrise: queryData.currentConditions.sunrise,
            sunset: queryData.currentConditions.sunset,
            temp: queryData.currentConditions.temp,
            uvIndex: queryData.currentConditions.uvindex,
            visibility: queryData.currentConditions.visibility,
            windDir: queryData.currentConditions.winddir,
            windSpeed: queryData.currentConditions.windspeed,
        },
        days: queryData.days,
        description: queryData.description,
        latitude: queryData.latitude,
        longitude: queryData.longitude,
        timeZone: queryData.timezone,
    };

    return weatherData;
}

async function displayWeather(queryData) {

    const weatherData = getWeatherData(queryData);
    console.log(weatherData);

    const weatherContainerDiv = document.createElement('div');
    const weatherHeaderContainer = document.createElement('div');
    const addressH2 = document.createElement('h2');

    weatherContainerDiv.classList.add('weather-container');
    weatherHeaderContainer.classList.add('weather-header-container');
    
    addressH2.textContent = weatherData.address;

    // temp converter buttons
    const tempConverterContainer = document.createElement('div');
    const tempFahrenheitButton = document.createElement('button');
    const tempCelciusButton = document.createElement('button');

    tempConverterContainer.classList.add('.temp-converter-container');

    tempFahrenheitButton.textContent = '°F';
    tempCelciusButton.textContent = '°C';

    tempConverterContainer.append(tempFahrenheitButton);
    tempConverterContainer.append(tempCelciusButton);

    tempFahrenheitButton.addEventListener('click', displayFahrenheit);
    tempCelciusButton.addEventListener('click', displayCelcius);

    // current weather
    const currentWeatherDiv = document.createElement('div');
    const currentWeatherOverviewDiv = document.createElement('div');
    const currentWeatherH3 = document.createElement('h3');
    const currentWeatherSpan = document.createElement('span');
    const currentWeatherSummarySpan = document.createElement('span');
    const currentConditionIcon = document.createElement('img');
    const currentCondition = document.createElement('p');
    const feelsLike = document.createElement('p');
    const currentWeatherDescription = document.createElement('p');

    currentWeatherDiv.classList.add('current-weather-container');
    currentWeatherOverviewDiv.classList.add('current-weather-overview');
    currentWeatherSummarySpan.classList.add('current-weather-summary');
    currentCondition.classList.add('current-weather-condition');
    feelsLike.classList.add('current-weather-feelslike');

    currentWeatherH3.textContent = 'Current Weather';

    // add current weather icon using dynamic import
    const weatherIconModule = await import(`../img/weather-icons/${weatherData.currentConditions.icon}.svg`);
    const weatherIconSrc = weatherIconModule.default;
    currentConditionIcon.src = weatherIconSrc;   

    currentCondition.textContent = weatherData.currentConditions.conditions;
    feelsLike.textContent = `Feels like: ${weatherData.currentConditions.feelsLike}℃`;
    currentWeatherDescription.textContent = weatherData.description;

    const currentWeatherDetails = document.createElement('div');
    const currentWindSpan = document.createElement('span');
    const currentWindLabel = document.createElement('span');
    const currentWind = document.createElement('span');
    const currentHumiditySpan = document.createElement('span');
    const currentHumidityLabel = document.createElement('span');
    const currentHumidity = document.createElement('span');
    const currentVisibilitySpan = document.createElement('span');
    const currentVisibilityLabel = document.createElement('span');
    const currentVisibility = document.createElement('span');
    const currentPressureSpan = document.createElement('span');
    const currentPressureLabel = document.createElement('span');
    const currentPressure = document.createElement('span');
    const currentDewSpan = document.createElement('span');
    const currentDewLabel = document.createElement('span');
    const currentDew = document.createElement('span');

    currentWeatherDetails.classList.add('current-weather-details');
    currentWindLabel.classList.add('weather-detail-title');
    currentHumidityLabel.classList.add('weather-detail-title');
    currentVisibilityLabel.classList.add('weather-detail-title');
    currentPressureLabel.classList.add('weather-detail-title');
    currentDewLabel.classList.add('weather-detail-title');
    
    currentWindLabel.textContent = 'Wind';
    currentWind.textContent = `${weatherData.currentConditions.windSpeed}km/h ${weatherData.currentConditions.windDir}°`;
    currentHumidityLabel.textContent = 'Humidity';
    currentHumidity.textContent = weatherData.currentConditions.humidity;
    currentVisibilityLabel.textContent = 'Visibility';
    currentVisibility.textContent = weatherData.currentConditions.visibility;
    currentPressureLabel.textContent = 'Pressure';
    currentPressure.textContent = weatherData.currentConditions.pressure;
    currentDewLabel.textContent = 'Dew Point';
    currentDew.textContent = weatherData.currentConditions.dew;

    currentWeatherDiv.append(weatherHeaderContainer);
    currentWeatherDiv.append(currentWeatherOverviewDiv);
    currentWeatherDiv.append(currentWeatherDescription);
    currentWeatherDiv.append(currentWeatherDetails);

    weatherHeaderContainer.append(addressH2);
    weatherHeaderContainer.append(tempConverterContainer);

    currentWeatherOverviewDiv.append(currentWeatherH3);
    currentWeatherOverviewDiv.append(currentWeatherSpan);

    currentWeatherSpan.append(currentConditionIcon);
    currentWeatherSpan.append(currentWeatherSummarySpan);

    currentWeatherSummarySpan.append(currentCondition);
    currentWeatherSummarySpan.append(feelsLike);

    currentWeatherDetails.append(currentWindSpan);
    currentWeatherDetails.append(currentHumiditySpan);
    currentWeatherDetails.append(currentVisibilitySpan);
    currentWeatherDetails.append(currentPressureSpan);
    currentWeatherDetails.append(currentDewSpan);
    currentWindSpan.append(currentWindLabel);
    currentWindSpan.append(currentWind);
    currentHumiditySpan.append(currentHumidityLabel);
    currentHumiditySpan.append(currentHumidity);
    currentVisibilitySpan.append(currentVisibilityLabel);
    currentVisibilitySpan.append(currentVisibility);
    currentPressureSpan.append(currentPressureLabel);
    currentPressureSpan.append(currentPressure);
    currentDewSpan.append(currentDewLabel);
    currentDewSpan.append(currentDew);

    // daily weather
    const dailyWeatherDiv = document.createElement('div');
    const dailyWeatherTabs = document.createElement('div');

    dailyWeatherDiv.classList.add('daily-weather-container');
    dailyWeatherTabs.classList.add('daily-weather-tabs');
    dailyWeatherTabs.classList.add('carousel-container');

    
    weatherData.days.forEach(async (day, index) => {
        // stop looping after 8th day
        if (index < 0 || index > 7) { 
            return true;
        }
        console.log(day.datetime);
        console.log(index);        

        const date = new Date(day.datetime);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const getDay = date.getDay();

        const dailyWeatherTab = document.createElement('div');
        const dailyWeatherDateDiv = document.createElement('div');
        const dailyWeatherDate = document.createElement('span');
        const dailyWeatherDay = document.createElement('span');
        const dailyWeatherIcon = document.createElement('img');
        const dailyWeatherConditionsDiv = document.createElement('div');
        const dailyWeatherCondition = document.createElement('span');
        const dailyWeatherTempDiv = document.createElement('div');
        const dailyWeatherTempMax = document.createElement('span');
        const dailyWeatherTempMin = document.createElement('span');

        dailyWeatherTab.classList.add('daily-weather-tab');
        dailyWeatherTab.classList.add('carousel-slide');
        dailyWeatherDateDiv.classList.add('daily-weather-date');
        dailyWeatherConditionsDiv.classList.add('daily-weather-conditions');
        dailyWeatherCondition.classList.add('daily-weather-condition');
        dailyWeatherTempDiv.classList.add('daily-weather-temp');
        dailyWeatherTempMax.classList.add('temp', 'celcius');

        dailyWeatherDate.textContent = date.getDate();
        dailyWeatherDay.textContent = dayNames[getDay];

        dailyWeatherCondition.textContent = day.description;

        dailyWeatherTempMax.textContent = `${day.tempmax} ℃`;
        dailyWeatherTempMin.textContent = `${day.tempmin} ℃`;

        dailyWeatherDateDiv.append(dailyWeatherDate);
        dailyWeatherDateDiv.append(dailyWeatherDay);

        const weatherIconModule = await import(`../img/weather-icons/${day.icon}.svg`);
        const weatherIconSrc = weatherIconModule.default;      
        dailyWeatherIcon.src = weatherIconSrc;

        dailyWeatherTempDiv.append(dailyWeatherTempMax);
        dailyWeatherTempDiv.append(dailyWeatherTempMin);

        dailyWeatherConditionsDiv.append(dailyWeatherIcon);
        dailyWeatherConditionsDiv.append(dailyWeatherTempDiv);

        dailyWeatherTab.append(dailyWeatherDateDiv);
        dailyWeatherTab.append(dailyWeatherConditionsDiv);
        dailyWeatherTab.append(dailyWeatherCondition);

        dailyWeatherTabs.append(dailyWeatherTab);

        displayDayWeatherData(weatherData.days[0]);

        dailyWeatherTab.addEventListener('click', () => {
            // console.log(weatherData.days[index]);
            displayDayWeatherData(weatherData.days[index]);
        });
    }); 
    
    weatherContainerDiv.append(currentWeatherDiv);

    dailyWeatherDiv.append(dailyWeatherTabs);

    weatherContainerDiv.append(dailyWeatherDiv);

    content.append(weatherContainerDiv);

    // add carousel arrows
    const carouselArrowBack = document.createElement('button');
    const carouselArrowNext = document.createElement('button');

    carouselArrowBack.textContent = '\u2BC7';
    carouselArrowNext.textContent = '\u2BC8';

    carouselArrowBack.classList.add('carousel-arrow');
    carouselArrowBack.classList.add('carousel-arrow-back');
    carouselArrowNext.classList.add('carousel-arrow');
    carouselArrowNext.classList.add('carousel-arrow-next');

    carouselArrowBack.addEventListener('click', () => handleCarouselMove(false));
    carouselArrowNext.addEventListener('click', () =>  handleCarouselMove());

    dailyWeatherDiv.append(carouselArrowBack);
    dailyWeatherDiv.append(carouselArrowNext);

    // document.querySelectorAll('.draggable').forEach(pointerScroll);
}

function displayDayWeatherData(day) {
    console.log(day);
    console.log(day.hours);

    const hWDC = document.querySelector('.hourly-weather-data-container');
    hWDC ? hWDC.remove() : null;

    const hourlyWeatherDataContainer = document.createElement('div');

    hourlyWeatherDataContainer.classList.add('hourly-weather-data-container');
    hourlyWeatherDataContainer.classList.add('draggable');

    day.hours.forEach(async (hour) => {
        const hourWeatherDataContainer = document.createElement('div');
        const hourWeatherDataTime = document.createElement('span');
        const hourWeatherDataIcon = document.createElement('img');
        const hourWeatherDataTemp = document.createElement('span');

        // convert date time from 24 to 12 hours
        const time12 = convert24To12Hour(hour.datetime);
        hourWeatherDataTime.textContent = time12;

        const weatherIconModule = await import(`../img/weather-icons/${hour.icon}.svg`);
        const weatherIconSrc = weatherIconModule.default;
        hourWeatherDataIcon.src = weatherIconSrc;
        hourWeatherDataIcon.draggable = false;

        hourWeatherDataTemp.textContent = hour.temp;

        hourWeatherDataContainer.append(hourWeatherDataTime);
        hourWeatherDataContainer.append(hourWeatherDataIcon);
        hourWeatherDataContainer.append(hourWeatherDataTemp);

        hourlyWeatherDataContainer.append(hourWeatherDataContainer);
    });

    content.append(hourlyWeatherDataContainer);
    document.querySelectorAll('.draggable').forEach(pointerScroll);
}

function convert24To12Hour(time24) {
    // validate input, accepts: HH:MM or HH:MM:SS (24 hour format)
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/;
    if (!timeRegex.test(time24)) {
        throw new Error(`Invalid 24-hour time format: ${time24}.`);
    }

    // split into hours, minutes, seconds(optional)
    const [hoursStr, minutesStr, secondsStr] = time24.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    const seconds = secondsStr ? parseInt(secondsStr, 10) : null;

    // determine AM/PM
    const period = hours < 12 ? 'AM' : 'PM';

    // adjust hours to 12-hour format
    let adjustedHours = hours % 12;
    adjustedHours = adjustedHours === 0 ? 12 : adjustedHours; // 0 -> 12 (midnight/noon)

    // format mintues (and seconds, if present)
    const minutesPadded = minutes.toString().padStart(2, '0');
    let time12 = `${adjustedHours}:${minutesPadded} ${period}`;

    // add seconds if provided
    // if (seconds !== null) {
    //     const secondsPadded = seconds.toString().padStart(2, '0');
    //     time12 = 
    // }

    return time12;
}