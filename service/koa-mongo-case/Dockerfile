FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --registry=https://registry.npm.taobao.org

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]