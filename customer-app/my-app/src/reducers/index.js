import { combineReducers } from 'redux';
import { customers } from './customers';
import { reducer as reduxForm } from 'redux-form';

export const reducers = combineReducers({
    customers,
    form: reduxForm
})