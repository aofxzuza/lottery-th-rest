# RESTful api for thai lottery
API services สำหรับการตรวจหวย

ขอขอบคุณแหล่งข้อมูลผลสลากกินแบ่งรัฐบาลจาก https://www.lottery.co.th/

## Prerequisites
* [Docker](https://www.docker.com/)
* [Docker-composer](https://docs.docker.com/compose/)
* แนะนำให้ใช้ [Virtual Machine](./vm/development) ในกรณีที่เครื่องไม่สามารถติดตั้ง Docker ได้


## Getting Started
ติดตั้ง npm dependencies
```bash
cd api.lotery-th
npm i
cd ..
```

เริ่มการใช้งาน docker contianers
```bash
docker-compose -f docker/docker-compose.yml up -d --build
```

หยุดการใช้งาน docker contianers
```bash
docker-compose -f docker/docker-compose.yml down
```

## Usage
หลังจาก docker เริ่มทำงานเราก็จะสามารถใช้งาน 
* [localhost](localhost) 
* หรือ [api.lottery-th.local](http://api.lottery-th.local) ในกรณีที่ใช้ [Virtual Machine](./vm/development) 

## License
Apache License V 2.0
