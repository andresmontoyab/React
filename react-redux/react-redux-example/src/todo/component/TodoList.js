import React from 'react'

export const TodoList = ({ todos, updateTodo, deleteTodo}) => {
    return (
        <ul>
            { todos.todos.map(todo => (
                <li key={todo.id} onClick={() => updateTodo(todo)}>
                    <input 
                        type="checkbox" 
                        defaultChecked={todo.checked}
                        checked={todo.checked}/> 
                    <button onClick={() => deleteTodo(todo)}>x</button>
                    {todo.text}
                </li>
            ))}
        </ul>
    )
}

export default TodoList