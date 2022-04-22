FROM node:16.14-alpine

WORKDIR /app/server-node-ts

COPY package*.json ./

RUN yarn install

COPY . ./

RUN yarn run build

CMD [ "yarn" , "start" ]