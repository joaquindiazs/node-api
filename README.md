# NodeJS API Dash

This is the backend of the dashboard, a NodeJS based REST service and database.


### Prerequisites

- Docker version 19.03.13
- Nodejs v10.15.3


### Docker Mysql recipe:

Dockerizing the database: 8.0.21 MySQL Community Server


  ```
 sudo docker run -h 127.0.0.1 -p 3306:3306 --name node-mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
 sudo docker start node-mysql
 sudo docker exec -it node-mysql mysql -u root -p
    create database escuelita;
    ALTER USER root IDENTIFIED WITH mysql_native_password BY 'root';
    flush privileges;
 sudo docker restart node-mysql
 
  ```


### Installing

Clone project and install dependencies first with

```
npm install
```

To run the project just do a

```
npm run dev
```

