FROM node:18-alpine

WORKDIR /usr/src/mvp/frontend

COPY /app/package*.json ./

RUN npm install

COPY . /usr/src/mvp/frontend/

EXPOSE 3000

CMD ["tail", "-f", "/dev/null"]