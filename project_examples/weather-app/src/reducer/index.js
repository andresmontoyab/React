import { combineReducers } from 'redux';
import { cities,  
    getForecastDataFromCities as _getForecastDataFromCities,
    getWeatherCities as _getWeatherCities } from './cities';
import { city } from './city';

export default combineReducers({
    cities,
    city
});

export const getCity = state => state.city;
export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, getCity(state)));
export const getWeatherCities = state => (_getWeatherCities(state));