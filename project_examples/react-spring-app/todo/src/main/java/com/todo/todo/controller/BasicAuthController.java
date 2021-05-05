package com.todo.todo.controller;

import com.todo.todo.domain.Todo;
import com.todo.todo.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BasicAuthController {

    private final TodoService todoService;

    public BasicAuthController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/basicauth")
    public String basicAuthnetication() {
        return "You're authenticated";
    }
}



