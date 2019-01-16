import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const weatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={''}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default weatherData;