import React, { Component} from 'react'

export default class Counter extends Component {
    render () {
        return (
            <div>
                <div>
                    Contador: <span> { this.props.counter}</span>
                </div>

                <button onClick={this.props.increment}> + </button>
                <button onClick={this.props.decrement}> - </button>
            </div>
        )
    }
}
