FROM node:21-alpine3.18
WORKDIR /app
COPY ./package*.json ./
RUN npm install -g
COPY . .
CMD npm run dev