package com.example.backend.dto;

public class LoginDto {
    
    private String email;
    private String password;
    
    // Constructor implicit
    public LoginDto() {}
    
    // Constructor cu parametri
    public LoginDto(String email, String password) {
        this.email = email;
        this.password = password;
    }
    
    // Getters și Setters
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
} 