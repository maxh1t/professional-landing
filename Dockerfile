FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY dist ./dist
COPY package.json ./package.json

EXPOSE 3000

CMD ["pnpm", "start"]
