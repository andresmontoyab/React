import React, { Component } from 'react';
import Counter from '../counter/Counter.js';
import '../counter/Counter.css';

class CounterContainer extends Component {
    constructor(props) {
      super();
      this.state = {
        counter: 0,
      }
    }
  
    render() {
      return (
       <div>
         <div className="topCont">
          <Counter 
            by={1} updateFunction={this.increment} counter = {this.state.counter}>
          </Counter>
         </div>
         <div className="cont">
          <Counter 
            by={5} updateFunction={this.increment} counter = {this.state.counter}>
          </Counter>
         </div>
         <div className="cont">
          <Counter 
            by={10} updateFunction={this.increment} counter = {this.state.counter}>
          </Counter>
         </div>
         <div className="cont">
          <Counter 
            by={15} updateFunction={this.increment} counter = {this.state.counter}>
          </Counter>
         </div>
         <div className="count">
            <span>{this.state.counter}</span>
          </div>
          <div className="cont">
            <button className="reset" onClick={() => this.reset()} 
            style ={{backgroundColor: 'red'}} > reset </button>  
          </div>
       </div>
      );
    }
  
    increment = (value) => {
      this.setState(
        (prevState) => {
         return {counter: prevState.counter + value}
      }
      )
      console.log("increment");
    }
  
    reset = () => {
      this.setState(
        (prevState) => {
          return {counter : 0}
        }
      )
    }
  }

  export default CounterContainer;