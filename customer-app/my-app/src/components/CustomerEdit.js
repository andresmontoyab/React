import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, isSubmitting } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomerActions';
import { Prompt } from 'react-router-dom';

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

const toNumber = value => value && Number(value);

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, onBack, pristine, submitSucceeded, submitting}) => {
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
                    validate={[isNumber]}
                    parse={toNumber}></Field>
                </div>
                <CustomerActions>
                    <button type="submit" disabled = {pristine || submitting}>Aceptar</button>
                    <button type="button" disabled = {submitting} onClick={onBack}>Cancelar</button>
                </CustomerActions>
                <Prompt 
                    when = {!pristine && !submitSucceeded}
                    message= "Se Perderan los datos si continua">  
                </Prompt>
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