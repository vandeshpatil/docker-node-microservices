# Dockerfile

FROM node:21-alpine3.18
WORKDIR /app
COPY ./package.json ./
RUN npm install -g
COPY . .
CMD npm start
EXPOSE 3000