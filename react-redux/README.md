# React Redux

* [Redux](#Redux)
* [Redux First Steps](#Redux-First-Steps)
  * [Install](#Install)
  * [Store](#Store)
  * [App with provider](#App-with-provider)
  * [Create Action](#Create-Action)
  * [Reducer](#Reducer)
  * [Install Browser dependency](#Install-Browser-dependency)
  * [Middlewares](#Middlewares)
* [Redux-Forms](#Redux-Forms)
    * [Form Validations](#Form-Validations)
      * [Field Validation](#Field-Validation)
      * [Global Validations](#Global-Validations)
    * [Submitting Form](#Submitting-Form)

# Redux       

In order to start with Redux we need to understand one very important concept, the ```state```, the state basically is a place in where we are going to store all the data that we need for our application.

Redux is going to help us to handle the state.

So Redux is a tool that deal with the state of an application, usually React and Redux work together.
  - The state is unique and global in the entire application.
  - The state only get modified with actions.

Redux is based in an architecture call Flux, in order to understand how it works redux we need to see some the very important concepts

- Store
- Dispatcher
- Actions
- Reducer

## Install

```sh
npm install --save redux
```

## Store

The store is where we are going to save all the information that our application needs, so let say that we have an app that render client information, so with redux we saved all the client information in the store. Saving information in the store let us read in every connected component the whole data.

The data flow is strictly uni-directional(There is no doble binding)

Single Source of Thruth: SSOT 

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/redux-flow.PNG) 

### Create Store

The first thing that we need to do is create the store, in order to do we can write the next code.

```JSX
import { createStore, compose } from 'redux';
export const store = createStore();
```

With the above line we are going to have the store ready to use.

### Store Methods

The store provide us three methods to use:

```jsx
store.subscribe(() => console.log(store.getState()))
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
```

- ```subscribe```: Every time that the state change the subscribe function is invoked
- ```getState```: Retrieves the store current state
- ```dispatch```: Send an action to the store, this actions + reducer are going to modified the 

### Connect App with Store

In order to connect our main app with the redux store, we need to use the Provider component and wrap our main App with that component

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

## Dispatcher

Every single time that we want to change our state in the store, we need to call the method dispatch, this method receives an object that usually is called action and has the properties type and payload.

- ```type```: We are going to put the action that we are doing, example Increment, decrement, delete.
- ```payload``` : In the payload is going to be all the extra data that we need in order to finish the actions.

```JSX
store.dispatch({
    type: 'INCREMENT',
    payload: {
        amount_to_increment: 2
    }
})
```

## Reducer

Reducer is one of the most important components, in the reducer we are going to write the final state after an specific actions happens.

### Create Reducer

```JSX

function counter(state = 0, action) {
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

export default counter
```

Let's now connect the two concepts reducer and dispatch, when we dispatch an action the reducer is going to be called and applied the specific behaviour that we defined for that action. So every time that we execute a dispatch the reducer is going to be executed.

But, be very carefull because if you dont add the reducer to the store so the reducer is not going to be called.

In order to add reducers to the store follow the next steps

```JSX
// 1. Create your reducer
function counter(state = 0, action) {
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

// 2. Create combineReducer and add all the reducers that you need
import { combineReducers } from 'redux'
const rootReducers combineReducers({
    counter
})

// 3. Create the store with the reducers
const store = createStore(
    rootReducer)
)
```

With the above code every single time that we use the dispatch method, the reducer is going to be executed.

## Connect Components

After we had everything in place we can use our store/state in our components applying the next setup. 

```JSX
import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ name, counter, increment, decrement }) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            {<h1>{ counter}</h1>}
            <p>{ name }</p>
        </div>
    )
}

// This method is going to map the store properties to the component properties
const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        counter: state.counter
    }    
}

const mapDispatchToProps= (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter)
```

## Redux DevTools

Redux DevTools is a tool that help us to understand how the state change with time, this tool let us see the all the history state of the application, lets start.

### Install Redux DevTools

In order to use redux devtools we need to follow the next steps:

1. Go to Chrome and seach for Redux DevTools
2. Open the option in Chrome Store.
3. Click in ```Add to Chrome``` 

After the above steps, we are going to have available a new tag in our development tools called ```Redux```, nevertheless that tag is not going to show us any information

### Enable Console

In order to enable all the information in the console you need to wrapp your reducers with the composeEnhancers 

```JSX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(reduxLogger, confirmDeleteTodo, thunk)
    )
)
```

In your browser search for redux devtools extensions

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/redux-console.PNG) 

## Middlewares

Middlewares are tools that let us make side effect calls when we applied action ober our state.

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/redux-flow-middlewares.PNG) 

### redux-logger

npm i redux-logger

### redux thunk

npm i redux-thunk

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
