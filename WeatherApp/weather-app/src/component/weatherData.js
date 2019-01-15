import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const weatherData = () => (
    <div>
        <WeatherTemperature/>
        <WeatherExtraInfo/>
    </div>
);

export default weatherData;