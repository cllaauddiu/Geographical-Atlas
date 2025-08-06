package com.example.backend.controller;

import com.example.backend.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "*")
public class TestController {
    
    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> test() {
        Map<String, Object> data = new HashMap<>();
        data.put("message", "Backend-ul funcționează!");
        data.put("timestamp", LocalDateTime.now());
        data.put("status", "OK");
        
        return ResponseEntity.ok(ApiResponse.success("Test reușit", data));
    }
    
    @GetMapping("/health")
    public ResponseEntity<ApiResponse<String>> health() {
        return ResponseEntity.ok(ApiResponse.success("Backend-ul este funcțional"));
    }
} 