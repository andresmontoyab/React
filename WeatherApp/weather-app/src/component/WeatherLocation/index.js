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