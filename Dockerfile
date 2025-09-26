FROM node:22-alpine

ARG USERNAME

ENV USERNAME=$USERNAME

WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install

COPY . ./

ENTRYPOINT ["npm", "start"]