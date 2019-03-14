import {
    CLOUD ,
    CLOUDY,
    SUN,  
    RAIN, 
    SNOW, 
    WINDY, 
} from '../constants/weather';

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind; 
    const weatherState = SUN;

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;
