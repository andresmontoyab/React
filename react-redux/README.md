# React Redux

* [Redux](#Redux)
* [Redux First Steps](#Redux-First-Steps)
  * [Install](#Install)
  * [Store](#Store)
  * [App with provider](#App-with-provider)
  * [Create Action](#Create-Action)
  * [Reducer](#Reducer)
  * [Install Browser dependency](#Install-Browser-dependency)
* [Redux-Forms](#Redux-Forms)
    * [Form Validations](#Form-Validations)
      * [Field Validation](#Field-Validation)
      * [Global Validations](#Global-Validations)
    * [Submitting Form](#Submitting-Form)
  

# Redux        

It is a framework that deal with the state of an application, usually React and Redux works together.
  - The state is unique and global in the entire application.
  - The state only get modified with actions.


Redux is based in an architecture call Flux

1. Dispatcher
2. Store
3. Action
4. View

## Install

```sh
npm install --save redux
```

## Store

The information in the store only can be modified with actions.

The data flow is strictly uni-directional(There is no doble binding)

Single Source of Thruth: SSOT 

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/redux-flow.PNG) 

```JSX
import { createStore, compose } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = 0;
function reducers(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT': {
            return state +1 
        }
        case 'DECREMENT': {
            return state  - 1 
        }
        default:
            return state
    }
}

export const store = createStore(reducers, {}, composeEnhancers());
```

The store provide us three usefull functions to use 

```jsx
store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
```

- ```subscribe```: Every time that the state change the subscribe function is invoked
- ```getState```: Retrieves the store current state
- ```dispatch```: Send an action to the store, this actions + reducer are going to modified the store.

## App with provider

```JSX
import { Provider } from 'react-redux';
import { store } from './store/index';

const rootComponent= (
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(rootComponent, document.getElementById('root'));
```

## Create Action

```JSX
import { FETCH_CUSTOMERS} from './../constants/index';
import { createAction } from 'redux-actions';

export const fetchCustomers = createAction(FETCH_CUSTOMERS);
```

### Redux connect

```JSX
import {connect} from 'react-redux';

// ... Component info
const mapDispatchToProps = dispatch => (
    {
        fetchCustomer: () => dispatch(fetchCustomers())
    }
)

export default withRouter(connect(null, mapDispatchToProps)(CustomerContainer));
```

## Reducer

Reducers basically is a function that is going to update the state of the application, usuaylly reducers are pure functions(Is an function that only depends of the input, it does not depent of any information out of the function)


In order to create a setup a reducer we must follow some steps.


```JSX
import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

const customers = handleActions({
    [FETCH_CUSTOMERS]: state => state
});
```

Create an index file in where call the previous created reducer

```JSX
import { combineReducers } from 'redux';
import { customers } from './customers';

export default combineReducers({
    customers
})
```

Use the combineReducers in our store file

```JSX
import { createStore, compose } from 'redux';
import { reducers } from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers());
```

## Install Browser dependency

In your browser search for redux devtools extensions

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/redux-console.PNG) 

## Redux-Forms

To install redux forms please type in the cli the next command.

```sh
npm install --save redux-form
```

1. In the index.js from our reducer put the next code

```JSX
import { reducer as reduxForm } from 'redux-form';

export const reducers = combineReducers({
    customers,
    form: reduxForm
})
```

2. In the component where we want to create our form add the next lines

```JSX
// Import dependency
import { reduxFrom, Field } from 'redux-form';

      <div>
            <h2>Edicion Client</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="dni">Dni</label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
        </div>

// with the previous depedency wrapp the component
export default reduxFrom({ form: 'CustomerEdit'}) (CustomerEdit); 
```

## Set Initial Values

1. First Approach

The first approach to set initial values is using the connect from react-redux in order to map the props of the componente, this approach works but have a little problem, because we are handling the state in this component this component is no longer a component it is a container.  

```JSX
const constumerEditForm = reduxForm({ form: 'CustomerEdit'}) (CustomerEdit);
export default connect( 
    (state,props) => ({ initialValues: props}))(constumerEditForm);
```

2. Second Approach High Order Functions 

Create a High Order Funcion

```JSX
import React, { Component } from "react";

export const setPropsAsInitial = WrapperComponent => (
    class extends Component {
        render () {
            return <WrapperComponent {...this.props} 
                initialValues = {this.props} 
                />
        }
    }
);
```

and in our main componente use this high order function to pass the initial values

```JSX
// ... Component Creation
const constumerEditForm = reduxForm({ form: 'CustomerEdit'}) (CustomerEdit);
export default setPropsAsInitial(constumerEditForm);
```

## Form Validations

When we want to validate specific fields in our forms, there are two approaches Field and Global validations, one important fact to keep in mind is that Field validation has higher priority than global validation

### Field Validation

In the field validation you just need to add in the validate prop in the Field tag

```JSX
// Imports
const isRequired = value => (
    !value && "Este campo es requerido"
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

const CustomerEdit = ({ name, dni, age}) => {
    return (
        <div>
            <h2>Edicion Client</h2>
            <form action="">
                <div>
                <Field 
                    name="name" 
                    label="Nombre"
                    component={MyField} 
                    type="text"
                    validate={isRequired}
                    ></Field>
                </div>
            </form>
        </div>
    );
};

const constumerEditForm = reduxForm({ form: 'CustomerEdit'}) (CustomerEdit);
export default setPropsAsInitial(constumerEditForm);
```

### Global Validations

In order to apply global validation we must follow the next steps:

1. In the reduxForm function we have to add the validate.

2. We need to create the validate function in where we are going to execute are validations

```JSX
// Imports
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

const CustomerEdit = ({ name, dni, age}) => {
    return (
        <div>
            <h2>Edicion Client</h2>
            <form action="">
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
            </form>
        </div>
    );
};

const constumerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
        validate
    }) (CustomerEdit);
export default setPropsAsInitial(constumerEditForm);
```

## Submitting Form

In order to submit information in a form we need to follow the next steps.

1. Create a `<form>`
2. In the form tag add the onSubmit property.
3. In the onSubmit property must be assigned the action that we want to apply
4. Create a button with type submit.
5. When this button is clicked the onSubmit action is going to be called

```JSX
// Imports

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
                <CustomerActions>
                    <button type="submit" >Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomerActions>
            </form>
        </div>
    );
};
```
