package com.dongJun.sideproject.repository;

import com.dongJun.sideproject.dto.UserDto;
import com.dongJun.sideproject.entity.User;

import java.util.Optional;

public interface UserRepository {

    Optional<User> findByUserId(String userId);

    void save(User user);;

    void updateUser(UserDto userDto);
}
