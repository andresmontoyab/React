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

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 22,
    wind: '12 m/s',
}

const location = "Bogota, CO";
const api_key = "c4c29d0c4be972ee5a3d7571699d6e92";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
          city: 'Medellin',
          data: data
        };
    }

    handleUpdateClick = () => {
        console.log("Updated.!!")
        //fetch(api_weather);
        this.setState({
            city: 'Medellin!!',
            data: data2,        
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className = "weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
         )
    };
}

export default WeatherLocation;