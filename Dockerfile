FROM node:21-alpine as build
ENV NODE_OPTIONS="--max-old-space-size=4096"
WORKDIR /lotto6x45x1
COPY package.json .
RUN npm ci --verbose
COPY . .
RUN npm run build
FROM nginx:1.25.4-alpine
COPY --from=build /lotto6x45x1/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]