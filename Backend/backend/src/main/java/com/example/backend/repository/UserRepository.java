package com.example.backend.repository;

import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    /**
     * Găsește un utilizator după email
     */
    Optional<User> findByEmail(String email);
    
    /**
     * Verifică dacă există un utilizator cu email-ul dat
     */
    boolean existsByEmail(String email);
} 