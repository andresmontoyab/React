import React from 'react'
import { connect } from 'react-redux'
import { addFruit } from '../redux/actions/fruitActions'

const Fruits = ( { fruits, addFruit }) => {

    const handlerSubmit = (e) => {
        e.preventDefault()
        const new_fruit = e.target[0].value
        addFruit(new_fruit)
    }

    return (
        <div>
            <h1>Fruits</h1>
            <form onSubmit={handlerSubmit}>
                <input type='text' placeholder='Add your fruit'></input>
                <button> Add your fruit</button>
            </form>
            <ul>
                { fruits.map((fruit, index) => (
                    <li key={fruit + index}> { fruit }</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fruits: state.fruits
    }    
}

const mapDispatchToProps= (dispatch) => {
    return {
        addFruit: (fruit) => dispatch(addFruit(fruit))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Fruits)
