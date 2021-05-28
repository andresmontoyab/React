import React from 'react'
import { connect } from 'react-redux'
import todo from '../reducer/todoReducer'
import { getId } from '../utils'
import { addTodo, updateTodo, deleteTodo } from './../actions/todoActions'
import TodoList from './TodoList'
import TodosForm from './TodosForm'

const Todos = ({todos, addTodo, updateTodo, deleteTodo}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const text = e.target[0].value
        addTodo({
            text,
            checked: false,
            id: getId()
        })
        e.target[0].value = ''
    }
    return (
        <div>
            <h2>Todos</h2>
            <TodosForm handleSubmit={handleSubmit}/>
            <TodoList 
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }    
}

const mapDispatchToProps= (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
        updateTodo: (todo) => dispatch(updateTodo(todo)),
        deleteTodo: (todo) => dispatch(deleteTodo(todo))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Todos)

