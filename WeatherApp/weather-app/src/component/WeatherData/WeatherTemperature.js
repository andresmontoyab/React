import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    windy: "windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    if(icon) 
        return <WeatherIcons name={icon} size="2x"/>;
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>;
    
}
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span>{temperature}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature