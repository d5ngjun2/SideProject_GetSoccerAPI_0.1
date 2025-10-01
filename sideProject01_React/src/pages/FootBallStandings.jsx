import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { soccerService } from "../api/soccer";

const FootBallStandings = () => {
  const [standings, setStandings] = useState({ pl: null, laliga: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Spring Boot API 호출
    const getStandings = async () => {
      try {
        const [pl, laliga] = await Promise.all([
          soccerService.getPlStandings(),
          soccerService.getPdStandings(),
        ]);
        console.log(pl, laliga);
        setStandings({ pl, laliga });
      } catch (err) {
        setError(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getStandings();
  }, []);

  if (loading) return <div>데이터 로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;
  return (
    <MainContainer>
      <Card>
        <h2>25-26 프리미어 리그 순위</h2>
        {standings?.pl.standings?.map((table, idx) => (
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

      <Card>
        <h2>25-26 라리가 리그 순위</h2>
        {standings?.laliga.standings?.map((table, idx) => (
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
  width: 80%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  background-color: #ffffff;
  display: flex;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  color: #333333;
`;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 800px;
  height: auto;
  margin: 20px;
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

export default FootBallStandings;
