import React from 'react';
import Location from './location';
import WeatherData from '../WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={"Medellin"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;