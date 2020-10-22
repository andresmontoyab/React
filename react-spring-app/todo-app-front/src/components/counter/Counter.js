import React, { Component } from 'react';
import './../counter/Counter.css';


class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: props.counter,
      updateFunction: props.updateFunction,
      by: props.by

    }
  }


  render() {
    return (
      <div>
        <button onClick={() => this.state.updateFunction(this.state.by)}> {this.state.by} </button>  
        <button onClick={() => this.state.updateFunction(this.state.by)}> -{this.state.by} </button>  
      </div>
     );
  }



  reset = () => {
    this.setState({counter: 0})
  }
}

export default Counter;
  