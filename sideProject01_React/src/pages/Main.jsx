import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Main = () => {
  const [standings, setStandings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Spring Boot API 호출
    fetch("http://localhost:8080/api/soccer/standings")
      .then((res) => {
        if (!res.ok) throw new Error("서버 응답 에러");
        return res.json();
      })
      .then((data) => {
        setStandings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>데이터 로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <MainContainer>
      <Card>
        <h2>25-26 프리미어 리그 순위</h2>
        {standings?.standings?.map((table, idx) => (
          <div key={idx}>
            <h2>{table.type}</h2>
            <ul>
              {table.table.map((team) => (
                <li key={team.team.id}>
                  {team.position}. {team.team.name} - {team.points} pts
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Card>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: 500px;
  margin: 50px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333333;
`;

const Card = styled.div`
  h2 {
    margin-bottom: 20px;
    color: #000000;
    border-bottom: 2px solid #000000;
    padding-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export default Main;
