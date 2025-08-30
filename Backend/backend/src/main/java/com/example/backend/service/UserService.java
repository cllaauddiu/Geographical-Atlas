package com.example.backend.service;

import com.example.backend.dto.LoginDto;
import com.example.backend.dto.UserRegistrationDto;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public User registerUser(UserRegistrationDto registrationDto) {
        if (userRepository.existsByEmail(registrationDto.getEmail())) {
            throw new RuntimeException("Email-ul există deja în sistem");
        }

        User user = new User(
            registrationDto.getEmail(),
            registrationDto.getPassword(),
            registrationDto.getFirstName(),
            registrationDto.getLastName()
        );
        
        return userRepository.save(user);
    }

    public User loginUser(LoginDto loginDto) {
        Optional<User> userOptional = userRepository.findByEmail(loginDto.getEmail());
        
        if (userOptional.isEmpty()) {
            throw new RuntimeException("Email-ul nu există în sistem");
        }
        
        User user = userOptional.get();

        if (!user.getPassword().equals(loginDto.getPassword())) {
            throw new RuntimeException("Parola este incorectă");
        }
        
        return user;
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long id, UserRegistrationDto updateDto) {
        Optional<User> userOptional = userRepository.findById(id);
        
        if (userOptional.isEmpty()) {
            throw new RuntimeException("Utilizatorul nu a fost găsit");
        }
        
        User user = userOptional.get();
        user.setFirstName(updateDto.getFirstName());
        user.setLastName(updateDto.getLastName());
        user.setEmail(updateDto.getEmail());

        if (updateDto.getPassword() != null && !updateDto.getPassword().isEmpty()) {
            user.setPassword(updateDto.getPassword());
        }
        
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("Utilizatorul nu a fost găsit");
        }
        userRepository.deleteById(id);
    }
} 