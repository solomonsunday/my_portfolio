FROM node:12-alpine

EXPOSE 3000

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN yarn install && yarn cache clean

# RUN yarn run build

COPY .  /usr/src/app/

CMD [ "yarn", "dev" ]



