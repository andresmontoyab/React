import getUrlWeatherByForecast from '../services/getUrlWeatherByForecast';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
import transformForecast from '../services/transformForecast';
import transforWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

export const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload})
export const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload})
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

export const setWeather = payload => { 
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            fetch(getUrlWeatherByCity(city))
            .then(response => response.json())
            .then(data => {
                debugger
                const weather = transforWeather(data);    
                dispatch(setWeatherCity({city, weather}))
            })
        })
    };
}
