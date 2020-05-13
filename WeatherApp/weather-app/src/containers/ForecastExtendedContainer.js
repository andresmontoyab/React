import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from './../reducer'
import ForecastExtended from './../component/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData } = this.props;
        debugger
        return (
            this.props.city &&
            <ForecastExtended 
                city={city}
                forecastData={forecastData}></ForecastExtended> 
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state)})

export default connect(mapStateToProps, null)(ForecastExtendedContainer)