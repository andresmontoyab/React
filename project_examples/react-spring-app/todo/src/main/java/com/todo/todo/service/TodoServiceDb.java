package com.todo.todo.service;

import com.todo.todo.domain.Todo;
import com.todo.todo.domain.TodoEntity;
import com.todo.todo.domain.TodoReposiroty;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceDb implements TodoService{

    private final TodoReposiroty todoReposiroty;

    public TodoServiceDb(TodoReposiroty todoReposiroty) {
        this.todoReposiroty = todoReposiroty;
    }

    @Override
    public List<Todo> findAll(String username) {
        return todoReposiroty.findAll().stream().map(todoEntity -> mapToDto(todoEntity)).collect(Collectors.toList());
    }

    @Override
    public Todo deleteById(long id) {
        Todo todo = findTodoById(id);
        todoReposiroty.deleteById(id);
        return todo;
    }

    @Override
    public Todo findTodoById(long id) {
        return mapToDto(todoReposiroty.findById(id).get());
    }

    @Override
    public Todo saveTodo(Todo todo) {
        TodoEntity todoEntity = mapToEntity(todo);
        return mapToDto(todoReposiroty.save(todoEntity));
    }

    private TodoEntity mapToEntity(Todo todo) {
        TodoEntity todoEntity = new TodoEntity();
        todoEntity.setId(todo.getId());
        todoEntity.setUsername(todo.getUsername());
        todoEntity.setDescription(todo.getDescription());
        todoEntity.setDone(todo.isDone());
        todoEntity.setTargetDate(todo.getTargetDate());
        return todoEntity;
    }

    private Todo mapToDto(TodoEntity todoEntity) {
        Todo todo = new Todo();
        todo.setId(todoEntity.getId());
        todo.setUsername(todoEntity.getUsername());
        todo.setDescription(todoEntity.getDescription());
        todo.setDone(todoEntity.isDone());
        todo.setTargetDate(todoEntity.getTargetDate());
        return todo;
    }
}
