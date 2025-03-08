FROM node:22-alpine

WORKDIR /app

COPY dist ./dist
COPY package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "start"]
