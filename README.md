# Lottery thailand rest api
API services สำหรับการตรวจหวย

ขอขอบคุณแหล่งข้อมูลผลสลากกินแบ่งรัฐบาลจาก https://www.lottery.co.th/

## Prerequisites
* [Docker](https://www.docker.com/)
* [Docker-composer](https://docs.docker.com/compose/)
* แนะนำให้ใช้ [Virtual Machine](./vm/development) ในกรณีที่เครื่องไม่สามารถติดตั้ง Docker ได้


## Getting Started
Start docker contianers
```bash
docker-compose -f docker/docker-compose.yml up -d --build
```

Stop docker contianers
```bash
docker-compose -f docker/docker-compose.yml down
```

## Usage


## License
Apache License V 2.0
