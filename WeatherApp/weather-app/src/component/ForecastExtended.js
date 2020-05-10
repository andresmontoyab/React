import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import getUrlWeatherByForecast from '../services/getUrlWeatherByForecast';
import transformForecast from '../services/transformForecast';
import './styles.css';

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({
                forecast: null
            });
            this.updateCity(nextProps.city);
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }

    updateCity = city => {
        fetch(getUrlWeatherByForecast(this.props.city))
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const forecastData = transformForecast(data);
            console.log(forecastData);
            this.setState({forecastData})
    });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => 
            <ForecastItem   
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data= {forecast.data}/>)
    }

    renderProgress = () => {
        return <h3>Cargando Pronstico extendido ...</h3>
    }
    render() {
        const { city  } = this.props;
        const { forecastData } = this.state;
        return(
            <div>
                <h2 className='forecast-title'> Pronostico Extendido para {city} </h2>
                {forecastData ?  
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;