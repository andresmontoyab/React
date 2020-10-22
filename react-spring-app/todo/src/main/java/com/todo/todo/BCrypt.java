package com.todo.todo;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCrypt {
    public static void main(String[] args) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String password123 = bCryptPasswordEncoder.encode("password123");
        System.out.println(password123);
    }
}
