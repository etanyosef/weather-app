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
    const addressH2 = document.createElement('h2');

    weatherContainerDiv.classList.add('weather-container');
    
    addressH2.textContent = weatherData.address;

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

    currentWeatherDiv.append(addressH2);
    currentWeatherDiv.append(currentWeatherOverviewDiv);
    currentWeatherDiv.append(currentWeatherDescription);
    currentWeatherDiv.append(currentWeatherDetails);

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
    
    weatherData.days.forEach(async (day, index) => {
        // stop looping after 8th day
        if (index > 7) { 
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
        dailyWeatherDateDiv.classList.add('daily-weather-date');
        dailyWeatherConditionsDiv.classList.add('daily-weather-conditions');
        dailyWeatherCondition.classList.add('daily-weather-condition');
        dailyWeatherTempDiv.classList.add('daily-weather-temp');

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
    });

    
    weatherContainerDiv.append(currentWeatherDiv);

    dailyWeatherDiv.append(dailyWeatherTabs);

    weatherContainerDiv.append(dailyWeatherDiv);

    content.append(weatherContainerDiv);
}
