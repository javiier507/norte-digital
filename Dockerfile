FROM node:18-alpine
 
WORKDIR /user/src/app
 
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
 
USER node
 
CMD ["node", "dist/main"]