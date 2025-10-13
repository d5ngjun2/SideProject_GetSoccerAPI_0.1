import React, { use, useState } from "react";
import styled from "styled-components";
import useUserStore from "../store/useStore";
import { useEffect } from "react";
import { userService } from "../api/users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const { user } = useUserStore();
  const [name, setName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [isChanged, setIsChanged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setName(user.userName);
    setEmail(user.email);
  }, [user]);

  useEffect(() => {
    if (name !== user.userName || email !== user.email) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [name, email, user]);

  const handleUpdate = async () => {
    if (!isChanged) return;

    try {
      const userNo = user.userNo;
      const result = await userService.update(userNo, name, email);
      setIsChanged(false);
      useUserStore.getState().setUser(result);
      toast.success("회원정보가 성공적으로 업데이트 되었습니다.");
    } catch (err) {
      console.error("업데이트 실패:", err);
    }
  };

  const handleLogOut = () => {
    useUserStore.getState().logout();
    toast.info("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <Container>
      <Title>마이페이지</Title>

      <ProfileCard>
        <ProfileImage src="https://via.placeholder.com/120" alt="profile" />
        <ProfileInfo>
          <Name value={name} onChange={(e) => setName(e.target.value)} />
          <Email value={email} onChange={(e) => setEmail(e.target.value)} />
        </ProfileInfo>
      </ProfileCard>

      <InfoBox>
        <InfoRow>
          <Label>계정 생성 날짜</Label>
          <Value>{user.enrollDate}</Value>
        </InfoRow>
        <InfoRow>
          <Label>회원 상태</Label>
          <Value>활성</Value>
        </InfoRow>
        {/* 필요시 추가 정보 항목 */}
      </InfoBox>

      <ButtonGroup>
        <EditButton
          disabled={!isChanged}
          onClick={handleUpdate}
          $active={isChanged}
        >
          정보 수정
        </EditButton>
        <LogoutButton onClick={handleLogOut}>로그아웃</LogoutButton>
      </ButtonGroup>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  max-width: 720px;
  margin: 10vh auto 15vh auto;
  padding: 40px;
  background: #f1f4ff;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #222;
  margin-bottom: 40px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 25px 30px;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #eee;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.input`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const Email = styled.input`
  font-size: 16px;
  color: #666;
  margin-top: 5px;
`;

const InfoBox = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 20px 30px;
  margin-bottom: 30px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  font-weight: 500;
  color: #555;
`;

const Value = styled.span`
  font-weight: 600;
  color: #222;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  width: 100%;
`;

const EditButton = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: ${({ $active }) => ($active ? "#007bff" : "#ccc")};
  color: white;
  font-weight: 600;
  cursor: ${({ $active }) => ($active ? "pointer" : "not-allowed")};
  transition: 0.2s;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#0056d2" : "#ccc")};
  }
`;

const LogoutButton = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #333;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;
