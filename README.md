# React Course Information

## Index

* [NodeJS](#nodejs)
* [Yarn](#yarn)
* [Npm](#npm)
* [React](#react)
  * [Why React?](#why)
     * [Virtual Dom](#Virtual-Dom)
     * [Reconcilation](#Reconcilation)
     * [Create App](#Create-App)
  * [Components](#components)
    * [Functional Component](#FunctionalComponent)
    * [Class Component](#ClassComponent)
    * [Which Use](#Which-Use)
  * [Props](#Props)
  * [React State](#React-State)
  * [Compenent LifeCycle](#Component-LifeCycle)
      * [Mounting](#Mounting)
          * [Constructor](#constructor-mounting)
          * [GetDerivedStateFromProps](#getDerivedStateFromProps-mounting)
          * [Render](#render-mounting)
          * [ComponentDidMount](#componentDidMount-mounting)
      * [Updating](#Updating)
          * [GetDerivedStateFromProps](#getDerivedStateFromProps-updating)
          * [ShouldComponentUpdate](#shouldComponentUpdate-updating)
          * [Render](#render-updating)
          * [GetSnapshotBeforeUpdate](#getSnapshotBeforeUpdate-updating)
          * [ComponentDidUpdate](#componentDidUpdate-updating)
      * [Unmounting](#Unmounting)
          * [ComponentWillUnmount](#componentWillUnmount-unmounting)
  * [React Router](#React-Router)
* [Redux](#Redux)
  ### First Steps Redux



* [JavaScript Basic](#javascript)
  * [Arrow Function](#Arrow-Function)
  * [Destructiring](#Destructuring)
  * [String Template](#StringTemplate)
  * [Prop Types](#PropTypes)
  * [Http Calls](#Using-HTTP-Calls)
  * [Promises](#Promises)
* [CSS Basic](#CSS)
  * [CSS Commom Properties](#CSS-Common-Properties)
  * [Material UI](#Material-Ui)
  * [Responsive Design](#Responsive-Design)
* [Usefull Extension](#Extensions)
  * [ESLint](#ESLint)
  
## NodeJs

Node js let us run application witout I/O blocking issues, also we need Nodejs to download libs using the npm tool.

- Download in NodeJs page the LTS version.
- Install NodeJs and Npm (Follow the instruction in the page.)
- In the cli (Command Line), write:

```sh
node -v  
```

## Yarn

- Download the Yarn
- Follow the installation steps .
- In the cli (Command Line), write:

```sh
 yarn -v  
```

## Npm

Use Npm to install, share, and distribute code; manage dependencies in your projects.

# React

## Why

1. Big Ecosystem: Have thousands of lib that use react features , let us do almost everything that we want.
2. Stability and high retrocompatibility: The way of handle with the version let that all the application continue working without a break point.
3. Performance: Fast load charge(Renderizacion using the Virtual DOM).

### Virtual Dom

In every web page there is a structure that is the representation of all the object that the web page has, this structure is called Domain object Model or DOM, and every time the DOM changes means a visual change in the screen.

Usually update the DOM is a very expensive task, react improves the process of update the DOM with the help of something called Virtual Dom, that basically is a lighweigth representation of the real DOM in memory and every time that some changes is require, React compare the Virtual Dom with the real one and applied just the requried changes in order to avoid unrequire updates.

### Reconcilation

Reconciliation is the process through which React updates the DOM. When a component's state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM

### Create App

In order to start using react js we should write the next command in the cli, please be sure that you already installed npm

```sh
npx create-react-app name_app  ##  npx -> install external package
```

If the above cmmand doesnt work , please use the follow commands.

```sh
npm -g create-react-app
create-react-app name-app
```

After the project is create, we must follow the next steps.

```sh
cd name-app/
yarn start  ## or npm start
```

### One Way Data Flow

Data flow within react always goes from the parents to the children, this kinda flow is usually called one way data flow, the parent components are going to pass the information to the children.

<img
  style="margin:50px 50px; box-sizing: border-box;"
  src="https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/one-way-data-flow.PNG"
  width="90%"
  height="90%"/>


## Components

Components are the building block of any React app and  a typical React app will have many of these.
  - Functional Components
  - Class Components 

### Functional Component

The main feature about functional components is that is stateless, as you can see in the functional component, there is no state, just a function, so if you dont need any state in your component and also you dont use the life cycle of react, choose this type.

```js
const Greeting = () => <h1>Hello World today!</h1>;
```

### ClassComponent

 The class component have some additional features such as the ability to contain logic(methods to handle onClick events), local state and other capabilities.

```js
class Greeting extends React.Component {
      render(){
        return <h1>Hello World Today!</h1>;
    }
}
```

The main difference between this two approach is that functional component are stateless and class component are statefull components.

We also must to use class component when we need to use the life cycle status provided by React.

### Which Use

Use a class Components if you need to manage local state, lifecycle methods to your component or add logic for events handlers, otherwise use functional component.

## Props

Props are React's way of making components easily and dynamically customisable. They provide a way of passing properties/data down from one component to another.
  - It's important to note that props are read-only and that a component must never modify the props passed to it.

### Functional Component with Props

```js
const Greeting = props => <h1>Hello {props.name}</h1>;
ReactDOM.render(
    <Greeting name={‘Edmond’}/>,
    document.getElementById('root')
);
```

### Class Component with Props

```js
class Greeting extends React.Component {
    render(){
    return <h1>Hello {this.props.name}</h1>;
    }
}

ReactDOM.render(
      <Greeting name={‘Edmond’}/>,
      document.getElementById('root')
  );
```

### Passing Destructuring between components

A better way of use the props and the component is passing all the component information that will change into a props property, for this we can pass this information using destructing + props.

```jsx
//Define the Data that you need to pass.
const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
};

//Put the data as a parameter in the component.
<WeatherData data={data}></WeatherData>

// Update the component to use the parameters.
const weatherData = ({ data }) => {
const { temperature, weatherState, humidity, wind } = data;
return (<div className="weatherDataCont" >
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
</div>);
};


//There is another way (destructing feature) to do the same.
const weatherData = ({ data : { temperature, weatherState, humidity, wind } }) => {
return (<div className="weatherDataCont" >
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
</div>);
};
```

## React-State

* The State in react is one the most important concepts that we must have, this state is always created and have all the information related with the component. This state is always created in the constructor.

```JSX
const data = {
   temperature: 5,
   weatherState: SUN,
   humidity: 10,
   wind: '10 m/s',
}

class WeatherLocation extends Component {
constructor() {
   super();
   this.state = {
   city: 'Medellin',
   data: data
      };
   }
}
```

In the above code we are creating a component with the required information.

How update the state?. If you want to update the React - state you have to use the setState() method.

```JSX

const data2 = {
  temperature: 15,
  weatherState: WINDY,
  humidity: 22,
  wind: '12 m/s',
}

handleUpdateClick = () => {
  console.log("Updated.!!")
  this.setState({
  city: 'Medellin!!',
  data: data2,
  });
}
```

## Component LifeCycle

In order to understand how it works the life cycles component in react, we first must understand what are the three phases that react has.

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/react-component-life-cycle.PNG) 

In the previous image are all the phases and life cycles that exist in react

### Mounting

Mounting means putting elements into the DOM.

The methods that get called in the mounting phase are the next ones:

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

The render() method is required and will always be called, the others are optional and will be called if you define them.

### constructor-mounting

The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

```JSX
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  ... render and other methods
```

### getDerivedStateFromProps-mounting

The getDerivedStateFromProps method is called right before the render method:

```JSX
 static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
```

### render-mounting

The render() method is required, and is the method that actual outputs HTML to the DOM.

```JSX
 render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
```

### componentDidMount-mounting

The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.

```JSX
 componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

```

### Updating

React has five built-in methods that gets called, in this order, when a component is updated:

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

The render() method is required and will always be called, the others are optional and will be called if you define them.

### getDerivedStateFromProps-updating

after an updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.

This will be a safer alternative to the previous lifecycle method componentWillReceiveProps().

```JSX
 static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
```

### shouldComponentUpdate-updating

In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true.

```JSX
  shouldComponentUpdate() {
    return false;
  }
```

### render-updating

The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

```JSX
 render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
```  

### getSnapshotBeforeUpdate-updating

In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

```JSX
 getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
```  

### componentDidUpdate-updating 

The componentDidUpdate method is called after the component is updated in the DOM.

```JSX
componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
```

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

1. componentWillUnmount()

### componentWillUnmount-unmounting

```JSX
 componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
```

The handleUpdateClick could be in a event handler method.

## React Router

React router is a tool that can help us to redirect pages in base of the url.

### First Step React Router

In order to start with react router we first must installed with the next command.

```sh
npm install react-router-dom
```

## Route

Inside of router only must be one element (div)

Route is another tool that let us relate a specific path with a component

```JSX
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  renderDummy = () => <h1>Dummy</h1>;
  renderCustomers = () => <h1>Customers</h1>;
  renderCustomerWithDNI = () => <h1> This is a customer with DNI</h1>;
  renderNewCustomer = () => <h1> This is a new customer </h1>;
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderDummy}></Route>
          <Route exact path="/customers" component={this.renderCustomers}></Route>
          <Switch>
            <Route exact path="/customers/new" component={this.renderNewCustomer}></Route>
            <Route exact path="/customers/:dni" component={this.renderCustomerWithDNI}></Route>
          </Switch>
        </div>
      </Router>
    );
  };
}
```

It is important to highlight what is the above code doing: 

1. Route: Basically works to move among different components.
2. exact: Only one Route could match the url, that means that only one component is going to be show
3. Switch: Only one the components inside of the switch is going to be show, the application is going to choose the one that matches with the
specification.

### Router Parameters

There are some react router parameters that we have to explain:
  - exact : This parameter it is very useful when we have multiples similar urls, but we need to map just if the url is exact the same.
  - strict : If exist a back slash at the end  so "/customer" is going to be different than  "/customer/"
  - match : match is use if we have wildcard in our url "/customers/:dni" where dni could be any kind of number

## Switch

Is very use when routes that can be ambiguos, with swicht it always evaluate the first result that matches

```jsx
<Switch>
  <Route path="/customers/new" component={NewCustomerContainer}></Route>
  <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />}></Route>
</Switch>
```

## Link and NavLink

The only difference between the two previous element is that with navLink we can customize a little bit.

## withRouter

It is a high order component that adds the properties match, location and history into the component, also when these properties change re-render the component.

```jsx
import {Route, withRouter } from 'react-router-dom';

handlerOnSubmitSuccess = () => {
    this.props.history.goBack();
}

handleOnBack = () => {
    this.props.history.goBack();
};


export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerContainer));
```

In the above code there is an example of how to use the withRouter function in our components, also we see an example of the history property that let us move in the browser.

### History property

History let us move to another url, and store the previous url in a stack. The history property has some usefull methods.
  - push  : go to a direction
  - go(n) : Go n pages back or forward
  - goBack() : Go to the previous page
  - goForward() :  Go to the next page

```JSX
 handleOnClick = () => {
        console.log("handle on click");
        this.props.history.push('/customers')                         
}
```
In order to always have the history property inside our component we must use the withRouter feature from the react-router-dom.

```JSX
export default withRouter(HomeContainers);
```

## Redux        

It is a framework that deal with the state of an application, usually React and Redux works together.
  - The state is unique and global in the entire application.
  - The state only get modified with actions.


Redux is based in an architecture call Flux

1. Dispatcher
2. Store
3. Action
4. View

### Install

```sh
npm install --save redux
```

### Store

```JSX
import { createStore, compose } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = state => state;
export const store = createStore(reducers, {}, composeEnhancers());
```

### App with provider

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

### Create Action

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

### Reducer

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

### Install Browser dependency

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

## Redux-promises


```jsx
npm install --save redux-promise
```

The information in the store only can be modified with actions.

The data flow is strictly uni-directional(There is no doble binding)

Single Source of Thruth: SSOT 

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/redux-flow.PNG) 

## Best Approach Store

In the previous example we import the "store" in our components, 

## Types of Components

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/dumb-and-smart-components-redux.jpg) 

### Smart Components

Containers, this one are component that has access to the state of the applications.

### Dumb Components

Presentational Components, this component only are able to draw information in the screen, but does not have access to the state of the applicaction.

### Reducers

## Hooks

### useState

Deal with the state of the component that means is very similar to the setState.

### useEffect

Lets hook to component cycle events like componentDidMount, componentDidUpdate and componentWillMount


### MiddleWares

It is used to call rest apis as middleware

npm install --save redux-thunk

# JavaScript

### Arrow Function

Always anonymus also cant be used like constructor.

	const mi_function = () => {
			boddy
	};


### Destructuring

* Is a strategy that let us to asign value to variables from complex objects or arrays with some elemts, using the technique "Object pattern".

	const obj = { name: 'Emiliano', nick: 'Oke'};
	const {name: myName, nick: myNick} = obj;

	// myName -> Emiliano.
	// myNick -> Oke.

	When the both structure are the same you just can do.

	const {name, nick} = obj;

	// name -> Emiliano
	// Nick -> Oke

* When use it destructuring is not require to use all the variables.

	const source = {x: 7, y: 3 };
	const {x} = source;

	// x -> 7
	// y ->  Uncaught ReferenceError 

* The destructing can have default values in the props.

	const {x, y = 1} = {};

	// x -> undefined
	// y -> 1


## Destructuring Arrays

	const myArray = ['a', 'b']
	const [x,y] = myArray;

	// x -> a
	// y -> b

* Also you can use it with keywords let and var.

* In Destructing with array you can use "elision" is a way to omit one o more elements  between some array positions. For example if we dont want to use some elements.

	const [,, x, y] = ['a','b','c','d'];

	//	x -> c
	//  y -> d

* You can use the "rest operator" with the destructuring in order to extract the elements that remains.

	const [x, ...y] = ['a', 'b', 'c'];

	// x -> a
	// y -> [b,c]

### StringTemplate     

* ES6 Template Strings (available in Chrome 41+), fundamentally change that. They introduce a way to define strings with domain-specific languages (DSLs), bringing better:
   * String interpolation
   * Embedded expressions
   * Multiline strings without hacks
   * String formatting
   * String tagging for safe HTML escaping, localization and more.

        var name = "Brendan";
        console.log(`Yo, ${name}!`);

### PropTypes

Because JS is not a Type Languague so is most likely that a error happens because the type of the parameter isn't the require it. So for this reason we need to use a tool called PropTypes to verify the type of the parameters.

* First we must install the prop types.

        1. yarn add prop-types.
        2. npm install prop-types.

* Also we have to import in our files the package proptypes.

        import PropTypes from 'prop-types';

* After that we can use the prop-types features.

        const WeatherTemperature = ({temperature, weatherState}) => (
            <div>
                {
                    getWeatherIcon(weatherState)
                }
                <span>{temperature}</span>
            </div>
        );

* For the next code we are setting up that the parameter for the componetn WeatherTemperature must be number and also String.

        WeatherTemperature.propTypes = {
        temperature: PropTypes.number,
        weatherState: PropTypes.string
}

* There is another scenario in which i dont send any argument to the weatherTemperature componente, if i need that the field is not empty i could set upt the component field as require.

        WeatherTemperature.propTypes = {
            temperature: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired
        }

* If you have installed ReactJS Code Snippet there are some shortcut available for the propTypes.

        ptsr = Prop Type String Required.
        ptnr = Prop Type Number Required

* For more complex object you can use prop types to validate the complete structure.

        1. For example if the waitted structures is the next.

                const data = {
                temperature: 5,
                weatherState: SUN,
                humidity: 10,
                wind: '10 m/s',
                }

        2. You could validate it in the next way.

                weatherData.propTypes = {
                data: PropTypes.shape({
                        temperature: PropTypes.number.isRequired,
                        weatherState: PropTypes.string.isRequired,
                        humidity: PropTypes.number.isRequired,
                        window: PropTypes.string.isRequired
                })
                }

* Types of PropTypes.

        1. optionalArray: PropTypes.array,
        2. optionalBool: PropTypes.bool,
        3. optionalFunc: PropTypes.func,
        4. optionalNumber: PropTypes.number,
        5. optionalObject: PropTypes.object,
        6. optionalString: PropTypes.string,
        7. optionalSymbol: PropTypes.symbol

* Anythin that can be rendered: number,string etc

        1. optionalNode: PropTypes.node,

* A React Element

        1. optionalElement: PropTypes.element

## Using HTTP Calls

### Fetch

* Fetch is a native function of JS that let us to call one API and retrieve information. To use this feature follow the next examples.

                const api = "endpoint.of.the.api.com";
                fetch(api);

* When we use a the fetch method the return is a promises,  that at the end is a response even if the answer is rejected or fullfill. In this new promises there are lot of usefull methods like .json to obtain the expected answer.

                fetch(api)
                .then(response => {
                   return response.json();
                })
                .then(data => {
                   console.log(JSON.stringify(data))
                });

## Promises

* A promises is an object that is used in async request and represent a value that could be available "now", in the "future" or "never". Also a promises could have the next status.

1. Pending -> Inicial Status is not fullfil or rejected.

2. Fullfill -> The operation was sucessfull.

3. Rejected -> The operation fails

### Promises-Flow:

* In the next image you will find the posible scenarios when we are dealing with a promises.

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/promisesFlow.PNG) 

### Define Promise

                let promise = new Promise((resolve, rejected ) => {
                        setTimeout(() => {
                                resolve("Works")
                        }, 2000);
                });

                console.log("The Promise Begins");
                promise.then((message) => {
                        console.log(message);
                });



# CSS

* Is a languague that describe how to visualize the html, The css files help us to give to the component shape, color, size, border and different UX features.

* If we want to use css files in react first we must to import the .css in our JS file.

        1. Create a styles.css file
        2. Import the styles.css file 
            import './styles.css';

* className -> is a functionality in which express that a element will match in a respective css configuration.

        1. In Js File

            <div className="weatherDataCont" >
                <WeatherTemperature temperature={30} weatherState={RAIN}/>
                <WeatherExtraInfo humidity={10} wind={"10 m/s"}/>
            </div>

        2. In Css File.

            .weatherDataCont {
            background-color: red;
            }

## CSS Common Properties      

        1. widht -> width = "400px"  or width = 40%

        2. height 
        
## Material-Ui

* Installation

1. npm install @material-ui/core

2. Add in the index.html file the next ref.

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">

* Features

1. AppBar.
2. Toolbar
3. Typography

## Responsive Design      

* Media Queries

With the help of viewport and media queries we can identified the different types of views and depend of each view we can change the style of the application.

* FlexBox

Is a display type that let us order in a smart way the elements that are inside of the flebox containers . 

* Bootstrap

Bootsrap stablish a Grid with twelve positions in which the application could react in different ways and also bootstrap give us a lot of style for our components.

* React-FlexBox-Grid

* Is a responsive modifiers that enable different column sizes, offset, alignment and distribution.

        <MuiThemeProvider>
          <Grid fluid>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <div className='red'>Red</div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="green">Green</div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className='blue'>Bue</div>
              </Col>
             </Row>
           </Grid>
        </MuiThemeProvider>

* In the above exmple we are going to create three colums with flexible sizes, the tag md means medium, sm small and xs extra small, as you can notice that values and tags represent the space in which each colum will be fit in the application, for example in medium all of the columns have the value of 4, that means that the three colums fit together in equals parts, but in xs all have the size of 12, so that means that each colum is alone in one row.

        <MuiThemeProvider>
          <Grid fluid>
            <Row>
              <Col xs>
                <div className='red'></div>
              </Col>
              <Col xs>
                <div className="green"></div>
              </Col>
              <Col xs>
                <div className='blue'></div>
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>

* The above example is very similar to the first one, but the only difference is that inthis example we dont put any specific value for each col, but because all the cols have the same type of size(xs) so they can share the space in equals parts, that means that each col have the 33% percentage of the screen and for this approach the col can not use another rowm, this is called "autosized"

* The fluid in the Grid tag it is a feature that let us fit more suitable the components in the screen.

# Extensions

## ESLint

* ESLint is a static code analyzer that is always checking the quality of the code that we are writing.

## Other Extension

1. ReactJs Code Snippet.


        








