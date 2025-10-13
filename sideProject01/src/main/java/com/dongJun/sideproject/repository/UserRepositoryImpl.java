package com.dongJun.sideproject.repository;

import com.dongJun.sideproject.dto.UserDto;
import com.dongJun.sideproject.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class UserRepositoryImpl implements UserRepository{

    @PersistenceContext
    private EntityManager em;


    @Override
    public Optional<User> findByUserId(String userId) {
        User user = em.createQuery("SELECT u FROM User u WHERE u.userId = :userId", User.class)
                .setParameter("userId", userId)
                .getResultStream()
                .findFirst()
                .orElse(null);
        return Optional.ofNullable(user);
    }

    @Override
    public void save(User user) {
        em.persist(user);
    }

    @Override
    public void updateUser(UserDto userDto) {
        User user = em.find(User.class, userDto.getUserNo());
        if (user != null){
            user.updateUserInfo(userDto.getUserName(), userDto.getEmail());
        }
    }
}
