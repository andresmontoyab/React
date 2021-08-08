# React Course Information

## Index

* [NodeJS](#NodeJs)
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
  * [Types of Components](#Types-of-Components)
      * [Smart Components](#Smart-Components)
      * [Dumb Components](#Dumb-Components)
  * [Hooks](#Hooks)
    * [useState](#useState)
    * [useEffect](#useEffect)
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
* [PropTypes](#PropTypes)
  * [Install PropTypes](#Install-PropTypes)
  * [Using PropTypes](#Using-PropTypes)
  * [Required Fields](#Required-Fields)
  * [Shortcuts](#Shortcuts)
  * [PropType Objects](#PropType-Objects)
  * [Types of PropTypes](#Types-of-PropTypes)
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

## Types of Components

![](https://github.com/andresmontoyab/BasicReactJs/blob/master/resources/dumb-and-smart-components-redux.jpg) 

### Smart Components

Containers, this one are component that has access to the state of the applications.

### Dumb Components

Presentational Components, this component only are able to draw information in the screen, but does not have access to the state of the applicaction.

## Hooks

### useState

Deal with the state of the component that means is very similar to the setState.

### useEffect

Lets hook to component cycle events like componentDidMount, componentDidUpdate and componentWillMount

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

### componentWillUnmount-unmounting

```JSX
 componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
```

The handleUpdateClick could be in a event handler method.


## PropTypes

Because JS is not a Type Languague so is most likely that a error happens because the type of the parameter isn't the require it. So for this reason we need to use a tool called PropTypes to verify the type of the parameters.

### Install PropTypes

```sh
## yarn
yarn add prop-types
```

```sh
## npm
npm install prop-types
```

### Using PropTypes

```jsx
import PropTypes from 'prop-types';

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{temperature}</span>
    </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string
}
```

In the above code we are setting up that the parameters for the WeatherTemperature are going to be number and string.

### Required Fields

If within the object/component there is a field that we required, we can set up with the keyword required.

```jsx
        WeatherTemperature.propTypes = {
            temperature: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired
        }
```

### Shortcuts

If you have installed ReactJS Code Snippet there are some shortcut available for the propTypes.

```jsx
ptsr = Prop Type String Required.
ptnr = Prop Type Number Required
```

### PropType Objects

For complex objects you can use prop types to validate the whole structure.

```jsx
const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
}

weatherData.propTypes = {
data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        window: PropTypes.string.isRequired
  })
}
```

### Types of PropTypes

1. optionalArray: PropTypes.array,
2. optionalBool: PropTypes.bool,
3. optionalFunc: PropTypes.func,
4. optionalNumber: PropTypes.number,
5. optionalObject: PropTypes.object,
6. optionalString: PropTypes.string,
7. optionalSymbol: PropTypes.symbol

