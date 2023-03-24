FROM node:current-alpine3.17

WORKDIR /app

COPY . . 

EXPOSE 3000

RUN npm install

RUN npm run  predeploy

CMD ["npm","run", "start"]

