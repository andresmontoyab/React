import React from 'react';
import WeatherLocation from './WeatherLocation'
import PropTypes from 'prop-types';
import './styles.css'

const strToComponents = (cities, onSelectedLocation) => {
    debugger
    return cities.map(city => 
        <WeatherLocation 
            key={city.key} 
            city={city.name}
            onWeatherLocationClick={() => onSelectedLocation(city.name)}
            data={city.data}/>)

    
};

const LocationList = ({cities, onSelectedLocation}) => (
    <div className="locationList">
        {strToComponents(cities, onSelectedLocation)}
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.funct,
}

export default LocationList;