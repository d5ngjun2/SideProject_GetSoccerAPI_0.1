package com.dongJun.sideproject.service;

import com.dongJun.sideproject.dto.UserDto;
import com.dongJun.sideproject.entity.User;
import com.dongJun.sideproject.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public User login(String userId, String userPwd) {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 존재하지 않습니다."));
        if (!user.getUserPwd().equals(userPwd)) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
        }
        return user;
    }

    @Override
    public String signUp(UserDto dto) {
        User user = dto.signUp();
        userRepository.save(user);
        return user.getUserId();
    }

}
