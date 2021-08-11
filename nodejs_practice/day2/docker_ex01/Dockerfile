FROM node:14 
#이미지 받아오기 (기본이미지 버전)

RUN apt-get update &&\
apt-get install -y vim nano net-tools openssh-server
# 컨테이너 생성될 때 이걸 한번 실행하고 만들어 주세요 라는 문장이다.


# docker build . -t study/hello-node:step1 도커를 빌드하는것 (이미지 파일 생성)
# . 은 도커파일 위치(자기자신) -t 은 도커이미지의 이름과 태그를 지정 study/hello-node:은 이름 step1은 태그명 
# docker images :이미지 목록 출력
# docker rmi 이미지ID :이미지 지우기 
# docker create -it --name doc-node-text docker_node:hello
# docker create -it --name doc-node-text docker_node:docker
# docker create -it --name doc-node-text study/hello-node:step1 도커를 생성
#docker ps -a :컨테이너 목록 출력
#docker start 컨테이너ID :컨테이너 실행
#docker exec -it 컨테이너ID bash :컨테이너 접속
#docker stop 컨테이너ID : 컨테이너 실행 중지
#docker rm 컨테이너ID  :컨테이너 제거