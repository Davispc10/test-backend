FROM node:16
ARG seedFile="./Pokemon Go.xlsx"
ARG workdir="/app"
RUN mkdir -p ${workdir}
WORKDIR ${workdir}

COPY ./package.json .

RUN npm cache clean --force
RUN npm install

COPY ./src ${workdir}
COPY ./.sequelizerc ${workdir}
COPY ${seedFile} ${workdir}
COPY ./scripts/docker-entrypoint.sh ${workdir}
COPY .env ${workdir}

RUN ["chmod", "+x", "/app/docker-entrypoint.sh"]

EXPOSE 3000

ENTRYPOINT ["/app/docker-entrypoint.sh"]
