package com.example.backend.controller;

import com.example.backend.dto.ApiResponse;
import com.example.backend.dto.LoginDto;
import com.example.backend.dto.UserRegistrationDto;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    
    @Autowired
    private UserService userService;

    //endpoint pentru inregistrare
    @PostMapping("/register")
    public ResponseEntity<ApiResponse<User>> register(@RequestBody UserRegistrationDto registrationDto) {
        try {
            User newUser = userService.registerUser(registrationDto);
            return ResponseEntity.ok(ApiResponse.success("Utilizator înregistrat cu succes", newUser));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<User>> login(@RequestBody LoginDto loginDto) {
        try {
            User user = userService.loginUser(loginDto);
            return ResponseEntity.ok(ApiResponse.success("Autentificare reușită", user));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @GetMapping("/test")
    public ResponseEntity<ApiResponse<String>> test() {
        return ResponseEntity.ok(ApiResponse.success("API-ul funcționează!", "Backend is running"));
    }
} 