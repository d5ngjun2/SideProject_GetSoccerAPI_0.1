package com.dongJun.sideproject.controller;

import com.dongJun.sideproject.dto.UserDto;
import com.dongJun.sideproject.entity.User;
import com.dongJun.sideproject.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto) {
        String userId = userDto.getUserId();
        String userPwd = userDto.getUserPwd();
        User loginUser = userService.login(userId, userPwd);
        if (loginUser != null) {
            return ResponseEntity.ok(loginUser);
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
