# React Styles and Transitions


* [Style Components](#Style-Components)
  * [Install](#Install)
  * [Use styled components](#Install)
  * [Style component extension](#Style-component-extension)
  * [Variables in styled-components](#Variables-in-styled-components)
  * [Nested Elements](#Nested-Elements)
  * [Nested Classes](#Nested-Classes)
* [React Transitions Groups](#React-Transitions-Groups)


## Style Components

styled-components is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS

### Install

In order to install Style Components we are going to write the next command

```sh
npm i styled-components 
```

### Use styled components

```js
import './App.css';
import styled from 'styled-components';

const Header = styled.header`
  background: blue;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`

function App() {
  return (
    <div>
      <Header>
        <h1>Style Components</h1>
      </Header>
      
    </div>
  );
}

export default App;
```

In the above code we have our basic styled-component example, lets highlight some details

1. We are importing ```style``` from ```style-components```
2. We create a const named ```Header``` that in the feature is going to act as tag
3. With the previous created ```style``` variable we specified that applied css code in all the ```header``` subtags
4. In our ```Header``` const we write the expected CSS code.
5. We use the ```Header``` tag and we have our style component!

### Style component extension

Visual Studio Code already has an extension that make us easy to write styled component. So please follow the next step in order to setup the styled component extension

1. Go to Visual Studio Code
2. Open the Extension Window.
3. Search for vscode-styled-components by Julien Poissonnier
4. Install it
5. Now everything should works!

### Variables in styled-components

Styled components got very powerfull when we start using variables, in the next example we are going to see how using template string + styled-component make our design more dynamic from JS code.

```js
const principalColor = '#789DFF'
const fontSize = 'font-size: 20px;'
const getLinearGradiente = (rot, colorOne, colorTwo) => {
  return `background: linear-gradient(${rot},${colorOne}, ${colorTwo})`
}

const Header = styled.header`
  ${getLinearGradiente('50deg', 'black', 'red')};
  text-align: center;
  border-radius: 0.2em;
  color: ${principalColor};
  padding: 0.3em;
  margin: 0.3em;
  ${fontSize}
```

Lets check some things above the above code:

1. There is a variable principalColor, this variable is used in our styled-component as parameters. This variables is knows as basic variable because it just defines the value of the property
2. There is a variable fontSize, this variable is also used in our styled-component. This variables is known as complete variable because defined the property and the value.
3. There is a function getLinearGradiente, this function is used in our styled-components. This functions help us to make our style more dynamic.

### Nested Elements

With style components we also are able to style nested elements, lets see the next example

```js
const Header = styled.header`
  ${getLinearGradiente('50deg', 'black', 'red')};
  text-align: center;
  color: ${principalColor};
  ${fontSize}

  h1 {
    color: white;
  }
`
```

In the above example, as we can see we have an h1 element in our styled-component, in that way all for all the h1 elements are going to be applied the defined properties.

### Nested Classes

In the previous section we wrote some code to style our nested element, but also we can define our own classes in the styled-component

```js
const Header = styled.header`
  text-align: center;
  border-radius: 0.2em;

  .own_class {
    color: purple;
  }
`
function App() {
  return (
    <div>
      <Header>
        <h1 className='own_class'>Style Components</h1>
      </Header>
      
    </div>
  );
}
```


As you can see we mark our h1 with the class ```own_class``` and also we define the ```own_class``` in our styled component

## React Transitions Groups

React Transitions groups is a tool that let us write transition in based to previous states.

In order to use React transition groups we can follow the next steps

### Install

To install react transition group we just need to write the next line:

```sh
npm i react-transition-group
```

### Using React Transition Groups

In order to understand the React transition, please check the files Carrusel.js and Carrusel.css



