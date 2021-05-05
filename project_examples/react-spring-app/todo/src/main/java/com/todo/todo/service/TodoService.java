package com.todo.todo.service;

import com.todo.todo.domain.Todo;

import java.util.List;

public interface TodoService {

    List<Todo> findAll(String username);

    Todo deleteById(long id);

    Todo findTodoById(long id);

    Todo saveTodo(Todo todo);
}
