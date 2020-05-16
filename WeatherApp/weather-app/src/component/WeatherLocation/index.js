import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './location';
import { PropTypes } from 'prop-types';
import WeatherData from '../WeatherData';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import transforWeather from '../../services/transformWeather';
import './style.css';
import {
    SUN, 
} from '../../constants/weather';

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
    <div className = "weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> : 
        <CircularProgress size={50}/>
        }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.funct,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
}

export default WeatherLocation;