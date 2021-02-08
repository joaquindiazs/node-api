# NodeJS API Dash

This is the backend of the dashboard, a NodeJS based REST service and database.


### Prerequisites

- Docker version 19.03.13
- Nodejs v10.15.3

### Installing

Clone project and install dependencies first with

```
npm install
```

To run the project just do a

```
npm run dev
```

### Mount and deploy a dockerized image of the api

```sh
$ docker build -t backend .
$ docker run -d --name inv_ws -p 3000:3000 backend
```
