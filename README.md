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
    * [Which Use](#WhichUse)
    * [Components and Props](#Props)
* [JavaScript Basic](#javascript)
  * [Arrow Function](#ArrowFunction)
  * [Destructiring](#Destructuring)
  * [String Template](#StringTemplate)
  

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

### WhichUse

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

### Links

1. https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb

# JavaScrip

### ArrowFunction

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





