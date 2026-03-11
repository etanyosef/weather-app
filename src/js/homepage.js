const APIKey = 'SB5H8XPWXTETBEG5F5FAZCP9M';

export async function getWeather(location) {
    try {
        const queryURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${APIKey}`;
        const response = await fetch(queryURL);
        const queryData = await response.json();

        const weatherData = {
            address: queryData.address,
            currentConditions : {
                conditions: queryData.currentConditions.conditions,
                feelsLike: queryData.currentConditions.feelslike,
                humidity: queryData.currentConditions.humidity,
                sunrise: queryData.currentConditions.sunrise,
                sunset: queryData.currentConditions.sunset,
                temp: queryData.currentConditions.temp,
                windDir: queryData.currentConditions.winddir,
                windSpeed: queryData.currentConditions.windspeed,
            },

        };

        console.log(queryData);

        displayWeather(weatherData);
    } catch(error) {
        console.log(error);
    }
}

function displayWeather(weatherData) {
    console.log(weatherData);
    // console.log(weatherData.address);
}
