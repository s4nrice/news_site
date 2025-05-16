#FROM node:lts-alpine3.17
FROM node:24-alpine3.20

WORKDIR /app

#COPY package*.json ./
#RUN npm ci
COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

#CMD ["sh", "-c", "npm run prisma:deploy && npm run dev"]
CMD ["sh", "-c", "npm run prisma:deploy && npm run build && npm run start"]