import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
    SUN, 
    CLOUD,
    DRIZZLE,
    RAIN,
    SNOW,
    THUNDER,
} from '../../constants/weather';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers",
    [THUNDER]: "day-thunderstorm",
};

const sizeIcon = "4x";

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    if(icon) 
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>;
    else
        return <WeatherIcons name={"day-sunny"} size={sizeIcon}/>;
    
}
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className ="temperature">{temperature}</span>
        <span className ="temperatureType">{' C°'}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature