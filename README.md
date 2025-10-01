# 프로젝트 명

> ⚡개발중..

---

## 기술 스택

| 구분       | 기술              |
| ---------- | ----------------- |
| 백엔드     | Spring Boot 3.5.6 |
| 프론트엔드 | React 18 + Vite   |
| JDK        | 17                |
| IDE        | IntelliJ, VSCode  |
| DB         | MySQL             |

## 실행 방법

### 1. 프로젝트 압축 해제

- 제공된 ZIP 파일을 원하는 위치에 압축 해제

### 2. 백엔드 실행

- 백엔드 폴더 상단에서 Spring Boot 버전에 맞춰 실행
  ./mvnw spring-boot:run
  또는 IntelliJ에서 Application.java 실행

### 3. 프론트엔드 실행

프론트엔드 폴더로 이동 후
npm install
npm run dev
실행 시 Vite에서 할당된 포트 번호 확인 후 브라우저 접속

### 4. 데이터베이스 설정

MySQL 환경 설정 필요
application.properties 또는 .env 파일에서 DB 계정/비밀번호, DB 이름 설정
필요한 경우 초기 테이블 및 더미 데이터 생성

### 주요 기능

1. 프리미어리그, 라리가 등 축구 리그 순위 조회

2. 경기 일정 및 결과 조회

3. 팀별 포인트, 승/무/패 등 통계 정보 제공

### 디렉토리 구조

project-root/
├─ backend/ # Spring Boot 백엔드
├─ frontend/ # React + Vite 프론트엔드
├─ README.md
└─ 기타 설정 파일

### 주의사항

백엔드 서버가 실행 중이어야 프론트에서 API 호출 가능

외부 축구 데이터 API 토큰 만료 시, .properties 또는 환경 변수에서 갱신 필요

MySQL 설정이 올바르지 않으면 데이터 조회/저장이 정상적으로 작동하지 않음
