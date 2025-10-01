import React, { useState, useEffect } from "react";
import { soccerService } from "../api/soccer";
import styled from "styled-components";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await soccerService.getMatches();

        if (data?.matches) {
          setMatches(data.matches);
        } else {
          setError("경기 목록 데이터 형식이 올바르지 않습니다.");
          setMatches([]);
        }
      } catch (err) {
        console.error("경기 정보 가져오기 실패:", err);
        setError(err.message || "서버 통신 중 알 수 없는 오류가 발생했습니다.");
        setMatches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        경기 정보를 불러오는 중입니다... 🔄
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: 20,
          color: "red",
          backgroundColor: "#fee",
          border: "1px solid red",
        }}
      >
        <h2>데이터 로딩 실패</h2>
        <p>
          <strong>오류 메시지:</strong> {error}
        </p>
        <p>
          백엔드 서버 또는 외부 API 상태를 확인해주세요. (예: API 토큰 만료,
          요청 제한 초과)
        </p>
      </div>
    );
  }

  if (!matches.length) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        해당 기간에 완료된 경기 데이터가 없습니다.
      </div>
    );
  }

  return (
    <Container>
      <Title>프리미어리그 경기 기록 (2025년 9월)</Title>
      <SubTitle>총 {matches.length} 건의 경기가 조회되었습니다.</SubTitle>
      <SubTitle>Ctrl+F 로 원하는 팀을 검색해보세요!</SubTitle>
      <MatchesGrid>
        {matches.map((match) => (
          <MatchCard key={match.id}>
            <Teams>
              <Team>
                <img src={match.homeTeam.crest} alt={match.homeTeam.name} />
                <strong>{match.homeTeam.name}</strong>
              </Team>
              <VS>vs</VS>
              <Team>
                <strong>{match.awayTeam.name}</strong>
                <img src={match.awayTeam.crest} alt={match.awayTeam.name} />
              </Team>
            </Teams>
            <Info>
              <p>
                <strong>날짜:</strong>{" "}
                {new Date(match.utcDate).toLocaleString()}
              </p>
              <p>
                <strong>결과:</strong> {match.score?.fullTime?.home ?? "-"} :{" "}
                {match.score?.fullTime?.away ?? "-"}
              </p>
              <p>
                <strong>지역:</strong> {match.area?.name ?? "정보 없음"}
              </p>
            </Info>
          </MatchCard>
        ))}
      </MatchesGrid>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
  padding: 40px;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 5px;
  color: black;
`;

const SubTitle = styled.p`
  text-align: center;
  color: #555;
`;

const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 10px;
`;

const MatchCard = styled.div`
  background-color: #f9faff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Teams = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const Team = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    margin: 0 10px;
  }
`;

const VS = styled.span`
  font-weight: bold;
  color: #888;
`;

const Info = styled.div`
  p {
    margin: 5px 0;
    color: #555;
  }
`;

export default Matches;
