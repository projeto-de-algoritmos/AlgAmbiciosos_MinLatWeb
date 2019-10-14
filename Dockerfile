FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app
COPY ./min_lat_web/package*.json .

RUN npm install

COPY ./min_lat_web .

RUN npm run build

FROM nginx:1.15
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build/ /usr/share/nginx/html
