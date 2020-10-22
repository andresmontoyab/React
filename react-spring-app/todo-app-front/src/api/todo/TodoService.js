import axios from 'axios';

class TodoService {

    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8585/users/${name}/todos`);
    }

    retrieveTodoById(name, id) {
        return axios.get(`http://localhost:8585/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8585/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        return axios.put(`http://localhost:8585/users/${name}/todos/${id}`, todo);
    }
}

export default new TodoService();