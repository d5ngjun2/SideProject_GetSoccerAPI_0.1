import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { soccerService } from "../api/soccer";

const PlStandings = () => {
  const [standings, setStandings] = useState({ pl: null, laliga: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStandings = async () => {
      try {
        const pl = await soccerService.getPlStandings();
        setStandings({ pl });
      } catch (err) {
        setError(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getStandings();
  }, []);

  if (loading) return <Container>데이터 로딩 중...</Container>;
  if (error)
    return <Container style={{ color: "red" }}>에러 발생: {error}</Container>;

  const renderTable = (tableData) => {
    return tableData?.standings?.map((table, idx) => (
      <TableSection key={idx}>
        <TableTitle>{table.type}</TableTitle>
        <TableList>
          {table.table.map((team) => (
            <TeamRow key={team.team.id}>
              <Position>{team.position}.</Position>
              <TeamLogo src={team.team.crest} alt={team.team.name} />
              <TeamName>{team.team.name}</TeamName>
              <Points>{team.points} pts</Points>
            </TeamRow>
          ))}
        </TableList>
      </TableSection>
    ));
  };

  return (
    <Container>
      <LeagueCard>
        <h2>25-26 프리미어 리그 순위</h2>
        {renderTable(standings.pl)}
      </LeagueCard>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 100px auto 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Helvetica Neue", Arial, sans-serif;
  gap: 30px;
`;

const LeagueCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  width: calc(50% - 20px);
  max-width: 1200px;
  padding: 30px 30px 20px 30px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  h2 {
    margin-bottom: 25px;
    color: #0077ff;
    border-bottom: 2px solid #0077ff;
    padding-bottom: 10px;
  }
`;

const TableSection = styled.div`
  margin-bottom: 20px;
`;

const TableTitle = styled.h3`
  margin-bottom: 10px;
  color: #004bb5;
  font-weight: 600;
`;

const TableList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto; /* ul 자체를 가운데로 */
  display: flex;
  flex-direction: column; /* 세로로 쌓이게 */
  align-items: center; /* li 중앙 정렬 */
  width: 100%; /* 필요 시 max-width로 제한 가능 */
  max-width: 500px;
`;

const TeamRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 좌우 공간 균등 */
  padding: 10px 15px;
  border-radius: 6px;
  margin-bottom: 5px;
  background-color: #e8f2ffaa;
  width: 100%; /* ul width 기준 */
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0f0ff;
  }
`;

const Position = styled.span`
  width: 30px;
  font-weight: bold;
  color: #004bb5;
`;

const TeamLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const TeamName = styled.span`
  flex: 1;
`;

const Points = styled.span`
  font-weight: bold;
  color: #0077ff;
`;

export default PlStandings;
