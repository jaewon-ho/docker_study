# 노드 앱을 이미지로 만들때
1. 노드가 사용한 베이스 이미지를 사용한다.

2. 소스 파일 및 package.json 을 이미지 내부로 카피해야 한다.
   -> 이미지 루트 내에 넣게 되기 때문에, work directory 를 따로 설정해주어야 한다.
   -> 전체 소스를 한번에 카피 할 경우 package.json 수정이 없어도 소스 수정 후  빌드 할 때마다 모듈을 새로 받는다. 이미 만들어진 캐시를 사용하며 빌드 하기 위해 copy를 package.json 과 소스를 따로 카피 한다.

3. 호스트 포트와 컨테이너 포트를 연결 해주어야 한다.
   -> docker run -p {host port}:{container port} {image ID || image Name}

4. Host Volume 을 Container와 공유 
   -> docker run -v {host dir}:{container dir} {image name} 
   -> host 내 npm 패키지 미설치 && container에만 설치해서 모듈 폴더는 컨테이너를 참조 하고 싶을 때			:   docker run -v {workdir}/node_modules  {image name}
5. detach 모드 
   -> -d

