# dependencies for builder
FROM node:18
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn

RUN yarn