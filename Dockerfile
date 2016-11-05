FROM node:7

ENV MODE server

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN npm install -g --silent yarn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm run prestart
COPY . .

CMD MODE=server npm start
