package com.todo.todo.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoReposiroty extends JpaRepository<TodoEntity, Long> {
}
