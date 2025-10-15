# 1단계: OpenJDK 17 기반 이미지
FROM openjdk:17-jdk-alpine

# 작업 디렉터리
WORKDIR /app

# 빌드된 JAR 복사
COPY build/libs/sideproject-0.0.1-SNAPSHOT.jar app.jar

# 컨테이너에서 8080 포트 노출
EXPOSE 8080

# 컨테이너 시작 시 JAR 실행
ENTRYPOINT ["java", "-jar", "app.jar"]
