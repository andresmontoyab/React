import React from 'react';
import PropTypes from 'prop-types';
import { reduxFrom, Field } from 'redux-form';

const CustomerEdit = ({ name, dni, age}) => {
    return (
        <div>
            <h2>Edicion Client</h2>
            <h2> Nombre: {name} / DNI : {dni} / Edad : {age} </h2>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,

};

export default reduxFrom({ form: 'CustomerEdit'}) (CustomerEdit);