import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ name, counter, increment, decrement }) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            {<h1>{ counter}</h1>}
            <p>{ name }</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        counter: state.counter
    }    
}

const mapDispatchToProps= (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter)
