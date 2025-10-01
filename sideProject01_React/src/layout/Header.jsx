import React from "react";
import styled from "styled-components";
import useUserStore from "../store/useStore";

// Header 컴포넌트
const Header = () => {
  const { user, isLogin } = useUserStore();
  return (
    <HeaderContainer>
      <Logo>
        <a href="/">⚽ SideProject</a>
      </Logo>
      <Nav>
        <ul>
          <li>
            <a href="/standings">리그 순위</a>
          </li>
          <li>
            <a href="/matches">경기 기록</a>
          </li>
          {/* <li>
            <a href="/teams">팀</a>
          </li> */}
          {/* <li>
            <a href="/players">선수</a>
          </li> */}
          <li>
            <a href="/community">커뮤니티</a>
          </li>
          <li>
            {isLogin ? (
              <span>{user.userName}님 환영합니다!</span>
            ) : (
              <a href="/login">로그인</a>
            )}
          </li>
          <li>
            {isLogin ? (
              <a href="/logout">로그아웃</a>
            ) : (
              <span>
                <a href="/signup">회원가입</a>
              </span>
            )}
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #ffffff; /* 흰색 바탕 */
  width: 100%;
  padding: 15px 270px;
  box-shadow:
    0 4px 4px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.06);
  position: fixed; /* 상단 고정 (스크롤 시에도 유지) */
  top: 0;
  z-index: 1000; /* 다른 콘텐츠 위에 표시 */
  display: flex;
  justify-content: space-between; /* 로고와 네비게이션을 양 끝으로 배치 */
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #000000; /* 축구 관련 색상 (예: 짙은 녹색) */
  margin: 0;
  font-weight: bold;

  /* 실제 축구 관련 로고나 텍스트로 변경 가능 */
  & a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    font-size: 15px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: #333333; /* 링크 색상 */
    padding: 5px 10px;
    transition: color 0.3s ease;
    font-weight: 700;

    &:hover {
      color: #0059ff; /* 마우스 오버 시 강조 색상 (예: 주황색) */
    }
  }
`;

export default Header;
