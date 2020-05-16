import {
    SUN, 
    CLOUD,
    DRIZZLE,
    RAIN,
    SNOW,
    THUNDER,
} from '../constants/weather';

const getWatherState = weather => {
    const { id } = weather;
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }
};

const transformWeather = weather_data => {
       debugger
        const { humidity, temp } = weather_data.main;
        const { speed } =weather_data.wind; 
        const weatherState = getWatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
    }
        return data;    
}

export default transformWeather;
