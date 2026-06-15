FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./Nginx/dev.conf /etc/nginx/conf.d/default.conf
EXPOSE 80