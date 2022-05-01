const express = require('express');
const app = express();

// 레디스 클라이언트 생성
const redis = require('redis');
const redisClient = redis.createClient({
    host: 'redis-server', // 도커 환경일 때 docker compose 에 정의된 컨테이너이름을 사용한다.
    port: 6379  // 레디스 기본 포트
})

redisClient.set('number', 0);

app.get('/', (req, res) => {
    redisClient.get('number', (err, num) => {
        let n = Number(num)
        redisClient.set('number', n+1);
	res.send(`숫자가 1씩 올라갑니다. : ${num}`)        
    });
})

app.listen('4000', () => {
    console.log('service start ')
})
