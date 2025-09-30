import React from "react";
import styled from "styled-components";

// Header 컴포넌트
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <a href="/">⚽ 축잘알</a>
      </Logo>
      <Nav>
        <ul>
          <li>
            <a href="/news">뉴스</a>
          </li>
          <li>
            <a href="/schedule">경기 일정</a>
          </li>
          <li>
            <a href="/teams">팀</a>
          </li>
          <li>
            <a href="/players">선수</a>
          </li>
          <li>
            <a href="/community">커뮤니티</a>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

// 1. styled-components를 사용하여 스타일링된 Header 컨테이너 생성
const HeaderContainer = styled.header`
  background-color: #ffffff; /* 흰색 바탕 */
  width: 100%;
  padding: 15px 30px; /* 상하 15px, 좌우 30px 패딩 */
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.06);
  position: sticky; /* 상단 고정 (스크롤 시에도 유지) */
  top: 0;
  z-index: 1000; /* 다른 콘텐츠 위에 표시 */
  display: flex;
  justify-content: space-between; /* 로고와 네비게이션을 양 끝으로 배치 */
  align-items: center;
`;

// 2. 로고 영역 스타일링 (예시)
const Logo = styled.h1`
  font-size: 24px;
  color: #000000; /* 축구 관련 색상 (예: 짙은 녹색) */
  margin: 0;
  font-weight: bold;

  /* 실제 축구 관련 로고나 텍스트로 변경 가능 */
  & a {
    text-decoration: none;
    color: inherit;
  }
`;

// 3. 네비게이션 메뉴 스타일링 (예시)
const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px; /* 메뉴 항목 사이 간격 */
  }

  li {
    font-size: 16px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #333333; /* 링크 색상 */
    padding: 5px 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #ff5722; /* 마우스 오버 시 강조 색상 (예: 주황색) */
    }
  }
`;

export default Header;
