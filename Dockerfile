#노드 설치
FROM node:alpine

#경로 설정
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

#설치
COPY package.json /app/package.json
RUN npm install --force
#react 스크립트 번호 -> package.json에서 확인
RUN npm install react-scripts@5.0.1 -g

#3000 포트로 보냄
EXPOSE 3000

CMD ["npm", "start"]