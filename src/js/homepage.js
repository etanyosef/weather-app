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

function displayWeather(queryData) {
    // clear content div
    content.textContent = '';

    const weatherData = getWeatherData(queryData);
    console.log(weatherData);

    const weatherContainerDiv = document.createElement('div');
    const addressH2 = document.createElement('h2');
    
    addressH2.textContent = weatherData.address;

    const currentWeatherDiv = document.createElement('div');
    const currentWeatherOverviewDiv = document.createElement('div');
    const currentWeatherH3 = document.createElement('h3');
    const currentCondition = document.createElement('p');
    const feelsLike = document.createElement('p');
    const currentWeatherDescription = document.createElement('p');

    currentWeatherH3.textContent = 'Current Weather';
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
    currentWeatherOverviewDiv.append(currentCondition);
    currentWeatherOverviewDiv.append(feelsLike);

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

    weatherContainerDiv.append(currentWeatherDiv);

    content.append(weatherContainerDiv);
}
