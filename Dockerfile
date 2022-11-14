FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3334

RUN yarn build

CMD ["node", "dist/main.js"]