import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import TodoApp from './components/todo/TodoApp';
 

class App extends Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return (
     <div className="App">
      <TodoApp></TodoApp>
       {/*<CounterContainer></CounterContainer>*/}
     </div>
    );
  }

}
export default App;
