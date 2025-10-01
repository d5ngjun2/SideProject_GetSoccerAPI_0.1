import React, { use } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { userService } from "../api/users";
import { toast } from "react-toastify";
import useUserStore from "../store/useStore";

const Login = () => {
  const navigate = useNavigate();

  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const checkCapsLock = (event) => {
    const isCapsLockOn = event.getModifierState("CapsLock");
    setIsCapsLockOn(isCapsLockOn);
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      const response = await userService.login(userId, userPwd);
      if (response && response.userId) {
        useUserStore.getState().setUser(response);
        toast.success("로그인에 성공했습니다!");
        setIsLogin(true);
        navigate("/"); // 로그인 성공 시 메인 페이지로 이동
      } else {
        toast.error("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <MainContent>
      <LoginContent>
        <h2>로그인</h2>
        <IoMdLogIn size={60} />
        <InputWrapper>
          <Label>아이디</Label>
          <FormInput
            type="text"
            placeholder="아이디를 입력해주세요."
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onKeyUp={(ev) => checkCapsLock(ev)}
            onAbort={(ev) => checkCapsLock(ev)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <FormInput
            type="password"
            value={userPwd}
            onChange={(e) => setUserPwd(e.target.value)}
            onKeyUp={(ev) => checkCapsLock(ev)}
            onAbort={(ev) => checkCapsLock(ev)}
            placeholder="비밀번호를 입력해주세요."
          />
          <CapsLockWarning>
            {isCapsLockOn ? "Caps Lock이 켜져 있습니다." : ""}
          </CapsLockWarning>
        </InputWrapper>

        <ButtonGroup>
          <LoginButton type="submit" onClick={(ev) => handleLogin(ev)}>
            로그인
          </LoginButton>
          <NoAccount>비밀번호를 잊으셨나요?</NoAccount>
        </ButtonGroup>
      </LoginContent>
    </MainContent>
  );
};

// 수정 1: vh 단위 사용, margin-top 제거
const MainContent = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2vh 5vw; /* 여백 추가 */
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.p`
  margin: 10px 10px 1px 0;
  font-weight: bold;
  text-align: left;
  width: 80%;
  align-items: center;
`;

const FormInput = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #dfdfdf;
  display: block;
  margin: 0 0 12px 0;
  justify-content: center;
  align-items: center;

  &:focus {
    border-color: #a3a3a3;
    outline: none;
  }
`;

const CapsLockWarning = styled.p`
  margin: 0;
  padding: 0;
  color: #000000;
  font-size: 12px;
  margin-bottom: 10px;
`;

// 수정 2: padding을 vh 단위로 변경
const LoginButton = styled.button`
  width: 100%;
  padding: 1.5vh 0; /* 픽셀 대신 vh 단위 */
  margin: 2px 0;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #363636;
    border: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 83%;
`;

const NoAccount = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #888888;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

const LoginContent = styled.form`
  width: 90%; /* 100% 대신 90% */
  max-width: 700px; /* 최대 너비 제한 */
  min-height: 60vh; /* 고정 높이 대신 vh */
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4vh 2vw; /* 내부 여백 추가 */

  /* 모바일 대응 */
  @media (max-width: 768px) {
    width: 95%;
    min-height: 70vh;
    padding: 3vh 4vw;
  }

  /* 태블릿 대응 */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 85%;
    min-height: 65vh;
  }
`;

export default Login;
