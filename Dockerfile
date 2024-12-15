FROM node:22-alpine

WORKDIR /app

COPY dist ./dist
COPY package.json ./package.json

RUN corepack enable

EXPOSE 3000

CMD ["pnpm", "start"]
