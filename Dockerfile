FROM node:18.18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN pnpm install --maxsockets=2 --loglevel verbose

COPY . .

EXPOSE 3000

CMD pnpm run dev