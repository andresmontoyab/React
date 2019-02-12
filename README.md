# React Course Information

### Index

* [NodeJS](#nodejs)
* [Yarn](#yarn)
* [Npm](#npm)
* [React](#react)
  * [Why React?](#why)
  * [Create App](#createapp)
  * [Components](#components)
    * [Functional Component](#FunctionalComponent)
    * [Class Component](#ClassComponent)
    * [Which Use](#Which-Use)
    * [Components and Props](#Props)
  * [Constants](#Constants)
* [JavaScript Basic](#javascript)
  * [Arrow Function](#Arrow-Function)
  * [Destructiring](#Destructuring)
  * [String Template](#StringTemplate)
  * [Prop Types](#PropTypes)
* [CSS Basic](#CSS)
  * [CSS Commom Properties](#CSS-Common-Properties)
* [Usefull Extension](#Extensions)
  

### NodeJs

Node js let us run application witout I/O blocking issues, also we need Nodejs to download lib using the npm tool.

* Download in NodeJs page the LTS version.

* Install NodeJs and Npm (Follow the instruction in the page.)

* In the cli(Command Line), write node -v  

### Yarn

* Download the Yarn

* Follow the installation steps .

* Write yarn -v to check if everything is installed.

### Npm

Use Npm to install, share, and distribute code; manage dependencies in your projects.

# React

### Why

* Big Ecosystem -> Have thousands of lib that use react features , let us do almost everything that we want.

* Stability and high Retrocompatibility -> The way of handle with the version let that all the application continue working without a break point.

* Performance -> Fast load charge(Renderizacion using the Virtual DOM).

### CreateApp


* npx create-react-app name_app // npx -> install external package

If the instalation doesnt work with the above command, please use the follow commands.

* npm -g create-react-app
* create-react-app name-app

After the project is create, we must follow the next steps.

* cd name-app/
* yarn start or npm start

## Components

### FunctionalComponent

* Components are the building block of any React app and  a Typical REact app will have many of these.

        const Greeting = () => <h1>Hello World today!</h1>;

* The class component have some additional features such as the ability to contain logic(methods to handle onClick events), local state and other capabilities.

### ClassComponent

* There is a different way to write components, so far we've written a functional component, a fitting name since it really was just a function. Components can also be written using ES6 classes instead of functions. Such Components are called class components.

        class Greeting extends React.Component {
             render(){
                return <h1>Hello World Today!</h1>;
            }
        }

The main difference between this two approach is that functional are stateless and Class are statefull components.

We also must to use class component when we need to use the life cycle status provided by React.

### 

### Which Use

* Use a Class Componetn if you need to manage local state, add lifecycle methods to your component or add logic for events handlers, Otherwise use functional component.

### Props

* Props are React's way of making components easily and dynamically customisable. They provide a way of passing properties/data down from one component to another.

* It's important to nothe that props are read-only and that a componetn must never modify the props passed to it.

### Functional COmponent with Props

        const Greeting = props => <h1>Hello {props.name}</h1>;
        ReactDOM.render(
            <Greeting name={‘Edmond’}/>,
            document.getElementById('root')
        );

### Class Component with Props

        class Greeting extends React.Component {
            render(){
            return <h1>Hello {this.props.name}</h1>;
            }
        }

        ReactDOM.render(
                <Greeting name={‘Edmond’}/>,
                document.getElementById('root')
            );

### Passing Destructuring between components

A better way of use the props and the component is passing all the component information that will change into a props property, for this we can pass this information using destructing + props.

        1. Define the Data that you need to pass.

                const data = {
                temperature: 5,
                weatherState: SUN,
                humidity: 10,
                wind: '10 m/s',
                }

        2.  Put the data as a parameter in the component.

                <WeatherData data={data}></WeatherData>

        3. Update the component to use the parameters.

                const weatherData = ({ data }) => {
                const { temperature, weatherState, humidity, wind } = data;
                return (<div className="weatherDataCont" >
                        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
                        <WeatherExtraInfo humidity={humidity} wind={wind}/>
                </div>);
                };

        3.1 There is another way (destructing feature) to do the same.

                const weatherData = ({ data : { temperature, weatherState, humidity, wind } }) => {
                return (<div className="weatherDataCont" >
                        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
                        <WeatherExtraInfo humidity={humidity} wind={wind}/>
                </div>);
                };
### Links

1. https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb

## Constants

The use of constante in JS helps to increase the consistency of the naming in the programs.

To create constantes in JS you must follow the next steps.

* Create a JS file in which you wil define the constant that you need(for this example is the weather.js file).

        export const CLOUD = "cloud";
        export const CLOUDY = "cloudy";
        export const SUN = "sun";
        export const RAIN = "rain";
        export const SNOW = "snow";
        export const WINDY = "windy";

* Import those constante in the file that you need it.

        import {
            CLOUD ,
            CLOUDY,
            SUN,  
            RAIN, 
            SNOW, 
            WINDY, 
        } from './../constants/weather';

* Use the constante in the file.

        <WeatherTemperature temperature={20} weatherState={RAIN}/>


# JavaScrip

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
        


# Extensions

1. ReactJs Code Snippet.


        








