import {api_key, url_base_weather_forecast} from '../constants/api_url'


const getUrlWeatherByForecast = (city) => {
    return `${url_base_weather_forecast}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByForecast;