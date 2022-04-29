FROM node:14.18

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app

COPY --chown=node:node . .

USER node

RUN npm i

EXPOSE 3000
CMD [ "npm" , "start"]