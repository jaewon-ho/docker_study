# 노드 앱을 이미지로 만들때
1. 노드가 사용한 베이스 이미지를 사용한다.
2. 소스 파일 및 package.json 을 이미지 내부로 카피해야 한다.
3. 호스트 포트와 컨테이너 포트를 연결 해주어야 한다.
   -> docker run -p {host port}:{container port} {image ID || image Name}
