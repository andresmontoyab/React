import React, { Component } from 'react';
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

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
          city,
          data: null
        };
        console.log("In constructor");
    }

    componentDidMount(){
        console.log("In Component did mount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("In Component did Update");
    }

    handleUpdateClick = () => {
        fetch(getUrlWeatherByCity(this.state.city))
        .then(response => {
            return response.json();
        }).then(data => {
            const newData = transforWeather(data);
            this.setState({
                data: newData
            })
        });
    }

    render() {
        const { city, data } = this.state;
        console.log("Render");
        return (
            <div className = "weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : 
                <CircularProgress size={50}/>
                }
            </div>
         )
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;