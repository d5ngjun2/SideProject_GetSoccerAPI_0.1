package com.dongJun.sideproject.dto;

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
}
