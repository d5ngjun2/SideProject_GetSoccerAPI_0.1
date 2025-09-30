import React from "react";
import styled from "styled-components";

// Footer 컴포넌트
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightSection>
          © {new Date().getFullYear()} 축잘알. All rights reserved.
        </CopyrightSection>
      </FooterContent>
    </FooterContainer>
  );
};

// 푸터 전체 컨테이너
const FooterContainer = styled.footer`
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  width: 100%;
  margin-top: auto;
`;

// 푸터 콘텐츠 래퍼
const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
`;

// 저작권 섹션
const CopyrightSection = styled.div`
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  font-weight: 400;
`;

export default Footer;
