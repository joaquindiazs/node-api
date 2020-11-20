FROM node:10.15.3-alpine
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install -g typescript
RUN npm install
RUN npm run dev
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
