import React, { Component } from 'react';
import Location from './location';
import WeatherData from '../WeatherData';
import './style.css';
import {
    CLOUD ,
    CLOUDY,
    SUN,  
    RAIN, 
    SNOW, 
    WINDY, 
} from '../../constants/weather';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}
class WeatherLocation extends Component {
    render() {
        return (
            <div className = "weatherLocationCont">
                <Location city={"Medellin"}></Location>
                <WeatherData data={data}></WeatherData>
            </div>
         )
    };
}

export default WeatherLocation;