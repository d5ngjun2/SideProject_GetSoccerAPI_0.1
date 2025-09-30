import React, { useEffect, useState } from "react";

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
    <div>
      <h1>2025 프리미어 리그 순위</h1>
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
    </div>
  );
};

export default Main;
