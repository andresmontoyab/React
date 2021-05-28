import React from 'react'

const TodosForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <input type="text"/>
        <button> Add</button>
    </form>
)

export default TodosForm