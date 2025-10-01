import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { soccerService } from "../api/soccer";

const MainPage = () => {
  return (
    <MainContainer>
      <FirstContent />
      <SecondContent />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  display: flex;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  color: #333333;
`;

const FirstContent = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #d2f6ff, #ffffff);
  color: white;
`;

const SecondContent = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #5557ff;
  color: white;
`;

export default MainPage;
