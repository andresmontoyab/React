import getUrlWeatherByForecast from '../services/getUrlWeatherByForecast';
import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCity = payload => ({type: SET_CITY, payload});
export const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => { 
    return dispatch => {
        dispatch(setCity(payload));
        return fetch(getUrlWeatherByForecast(payload))
        .then(response => response.json())
        .then(data => {
            const forecastData = transformForecast(data);
            dispatch(setForecastData({city: payload, forecastData}));
    });
    };
};