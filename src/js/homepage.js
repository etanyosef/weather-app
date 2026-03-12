const APIKey = 'SB5H8XPWXTETBEG5F5FAZCP9M';

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
        address: queryData.address,
        currentConditions : {
            conditions: queryData.currentConditions.conditions,
            dew: queryData.currentConditions.dew,
            feelsLike: queryData.currentConditions.feelslike,
            humidity: queryData.currentConditions.humidity,
            icon: queryData.currentConditions.icon,                
            sunrise: queryData.currentConditions.sunrise,
            sunset: queryData.currentConditions.sunset,
            temp: queryData.currentConditions.temp,
            uvIndex: queryData.currentConditions.uvindex,
            visibility: queryData.currentConditions.visibility,
            windDir: queryData.currentConditions.winddir,
            windSpeed: queryData.currentConditions.windspeed,
        },
        description: queryData.description,
        latitude: queryData.latitude,
        longitude: queryData.longitude,
    };

    return weatherData;
}

function displayWeather(queryData) {
    const weatherData = getWeatherData(queryData);
    console.log(weatherData);
    // console.log(weatherData.address);
}
