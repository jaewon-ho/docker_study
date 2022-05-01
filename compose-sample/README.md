# docker compose 설정 파일 

## version: {docker compose version}
## services:               // 실행되는 컨테이너 목록
##   redis-server:       // 컨테이너 이름
##    image: {컨테이너에 사용될 이미지}
##   node-app:
##    build: {docker file 위치}
##      prots:
##       - {포트 맵핑 {host port}:{container port}}



# docker compose 실행
## 1. docker-compose up -d
## 2. --build 옵션 사용시 무조건 이미지를 새로 만들고 컨테이너를 실행함
## 3. docker-compose down    // 컴포즈 종료:
