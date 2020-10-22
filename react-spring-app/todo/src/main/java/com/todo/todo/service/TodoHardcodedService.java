package com.todo.todo.service;

import com.todo.todo.domain.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//@Service
public class TodoHardcodedService implements TodoService{

    private static List<Todo>  todos = new ArrayList<>();
    private static int counterTodo = 0;


    static {
        todos.add(new Todo(++counterTodo, "React", "Learning React", new Date(), false));
        todos.add(new Todo(++counterTodo, "German", "Learning German", new Date(), false));
        todos.add(new Todo(++counterTodo, "Docker", "Learning Docker Compose", new Date(), false));
        todos.add(new Todo(++counterTodo, "Docker", "Learning Docker Compose", new Date(), false));
        todos.add(new Todo(++counterTodo, "Docker", "Learning Docker Compose", new Date(), false));
        todos.add(new Todo(++counterTodo, "Docker", "Learning Docker Compose", new Date(), false));
        todos.add(new Todo(++counterTodo, "Docker", "Learning Docker Compose", new Date(), false));
    }

    @Override
    public List<Todo> findAll(String username) {
        return todos;
    }

    @Override
    public Todo findTodoById(long id) {
        return findById(id);
    }

    @Override
    public Todo saveTodo(Todo todo) {
        Todo retrieveTodo = findTodoById(todo.id);
        if (retrieveTodo != null ){
            todos.remove(retrieveTodo);
            todos.add(todo);
        } else {
            todo.setId(++counterTodo);
            todos.add(todo);
        }
        return todo;
    }

    @Override
    public Todo deleteById(long id) {
        Todo todo = findById(id);
        todos.remove(todo);
        return todo;
    }

    private Todo findById(long id) {
        return todos.stream()
            .filter(todo -> todo.getId() == id)
            .findFirst().orElse(null);
    }


}
