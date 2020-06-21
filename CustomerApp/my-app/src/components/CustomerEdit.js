import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { reduxForm, Field, isSubmitting } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomerActions';

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El Campo nombre es requerido"
    }

    if (!values.dni) {
        error.dni = "El Campo DNI es requerido"
    }

    return error;
};

const isNumber = value => (
    isNaN(Number(value)) && "El Campo debe ser un numero"
);

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, onBack}) => {
    return (
        <div>
            <h2>Edicion Client</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <Field 
                    name="name" 
                    label="Nombre"
                    component={MyField} 
                    type="text"
                    ></Field>
                </div>
                <div>
                <Field 
                    name="dni" 
                    label="DNI"
                    component={MyField} 
                    type="text"
                    validate={[isNumber,]}></Field>
                </div>
                <div>
                <Field 
                    name="age" 
                    label="Age"
                    component={MyField} 
                    type="number"
                    validate={[isNumber,]}></Field>
                </div>
                <CustomerActions>
                    <button type="submit" >Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomerActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,

};

const constumerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
        validate
    }) (CustomerEdit);
export default setPropsAsInitial(constumerEditForm);