FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install --save font-awesome
RUN npm install --save bootstrap
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/angapp /usr/share/nginx/html
EXPOSE 80
