import React, {Component} from 'react';
import TodoService from '../../api/todo/TodoService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [],
            message: null
        }

        this.deleteTodo =  this.deleteTodo.bind(this);
        this.createTodo =  this.createTodo.bind(this);
        this.updateTodo =  this.updateTodo.bind(this);
    }

    componentDidMount() {
        this.refreshTodo();
    }

    refreshTodo() {
        let username = AuthenticationService.getLoggedInUsername();
        TodoService.retrieveAllTodos(username)
            .then( response => {
                this.setState({ todos : response.data})
            }).catch (error => {
                let errorMessage = '';
                if (error.message) errorMessage += error.message;
                if (error.response && error.response.data) errorMessage += error.response.data.message;
                console.log(errorMessage)
            })
    }
    render() {
        return (
            <div>
                <h1> List Todos</h1> 
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo => 
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={() => this.createTodo()}> Add</button>
                    </div>
                </div>
                
            </div>
        )
    }

    createTodo() {
        this.props.history.push('/todos/-1')
    }

    deleteTodo(id) {
        let username = AuthenticationService.getLoggedInUsername();
        TodoService.deleteTodo(username, id)
            .then(
                response => { 
                    this.setState({
                        message : `Delete of Todo ${id} successfull`,
                        todos: this.state.todos.filter(todo => todo.id !== id )
                    })}
            )
    }

    updateTodo(id) {
        this.props.history.push(`/todos/${id}`)
    }
}

export default ListTodosComponent;