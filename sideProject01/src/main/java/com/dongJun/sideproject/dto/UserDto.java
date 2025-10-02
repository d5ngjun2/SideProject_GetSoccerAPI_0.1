package com.dongJun.sideproject.dto;

import com.dongJun.sideproject.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private Long userNo;
    private String userId;
    private String userPwd;
    private String userName;
    private String email;

    public User signUp() {
        return User.builder()
                .userNo(this.userNo)
                .userId(this.userId)
                .userPwd(this.userPwd)
                .userName(this.userName)
                .email(this.email)
                .build();
    }
}
