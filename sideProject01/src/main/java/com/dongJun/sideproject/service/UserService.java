package com.dongJun.sideproject.service;

import com.dongJun.sideproject.dto.UserDto;
import com.dongJun.sideproject.entity.User;

import java.util.List;

public interface UserService {


    User login(String userId, String userPwd);

    String signUp(UserDto dto);
}
