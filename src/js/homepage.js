const APIKey = 'SB5H8XPWXTETBEG5F5FAZCP9M';

export async function getWeather(location) {
    try {
        const queryURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${APIKey}`;
        const response = await fetch(queryURL);
        const queryData = await response.json();
        console.log(queryData);
    } catch(error) {
        console.log(error);
    }
}
