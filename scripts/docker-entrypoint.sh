#!/bin/sh

npm install -g sequelize-cli

npm run db:migrate:down
npm run db:migrate:up
npm run db:seed:down
npm run db:seed:up

npm run start