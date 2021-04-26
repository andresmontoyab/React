# React Styles and Transitions

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



