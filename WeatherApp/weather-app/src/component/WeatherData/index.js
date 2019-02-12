import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD ,
    CLOUDY,
    SUN,  
    RAIN, 
    SNOW, 
    WINDY, 
} from '../../constants/weather';
import './styles.css';

const weatherData = ({ data : { temperature, weatherState, humidity, wind } }) => {
    return (<div className="weatherDataCont" >
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>);
};

weatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        window: PropTypes.string.isRequired
    })
}

export default weatherData;