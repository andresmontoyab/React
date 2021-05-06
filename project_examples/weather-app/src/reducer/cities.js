import {SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY} from '../actions';
import toPairs from 'lodash.topairs';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.payload;
            return { ... state, [city]: { ...state[city], forecastData }};
        }
        case GET_WEATHER_CITY: {
            const city = action.payload;
            return {...state, [city]: {...state[city], weather:null}}
        }
        case SET_WEATHER_CITY: {
            const {city, weather} = action.payload;
            return {...state, [city]: {...state[city], weather}}
        }
        default:
            return state;
    }
}

const fromObjToArray = cities => (toPairs(cities).map(([key, value]) => ({key, name: key, data: value.weather})));

export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData;
export const getWeatherCities = (state) => fromObjToArray(state.cities);