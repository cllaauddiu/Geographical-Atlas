package com.example.backend.dto;

public class ApiResponse<T> {
    
    private boolean success;
    private String message;
    private T data;
    
    // Constructor implicit
    public ApiResponse() {}
    
    // Constructor pentru succes
    public ApiResponse(boolean success, String message, T data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
    
    // Constructor pentru succes fără data
    public ApiResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
    
    // Metode statice pentru crearea răspunsurilor
    public static <T> ApiResponse<T> success(String message, T data) {
        return new ApiResponse<>(true, message, data);
    }
    
    public static <T> ApiResponse<T> success(String message) {
        return new ApiResponse<>(true, message);
    }
    
    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, message);
    }
    
    // Getters și Setters
    public boolean isSuccess() {
        return success;
    }
    
    public void setSuccess(boolean success) {
        this.success = success;
    }
    
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public T getData() {
        return data;
    }
    
    public void setData(T data) {
        this.data = data;
    }
} 