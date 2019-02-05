import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
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

const weatherData = () => (
    <div className="weatherDataCont" >
        <WeatherTemperature temperature={30} weatherState={RAIN}/>
        <WeatherExtraInfo humidity={10} wind={"10 m/s"}/>
    </div>
);

export default weatherData;