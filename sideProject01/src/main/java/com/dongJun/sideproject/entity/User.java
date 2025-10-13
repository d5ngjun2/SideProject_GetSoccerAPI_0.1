package com.dongJun.sideproject.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "USERS")
public class User {

    // PK
    // 아이디 번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_NO")
    private Long userNo;

    @Column(name = "USER_ID", length = 30, unique = true, nullable = false)
    private String userId;

    @Column(name = "USER_PWD", nullable = false)
    private String userPwd;

    @Column(name = "EMAIL", nullable = false)
    private String email;

    @Column(name = "USER_NAME", nullable = false)
    private String userName;

    @Column(name = "ENROLL_DATE", nullable = false)
    private LocalDate enrollDate;

    @PrePersist
    public void prePersist(){
        if (this.enrollDate == null) {
            this.enrollDate = LocalDate.now();
        }
    }

    public void updateUserInfo(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
}
