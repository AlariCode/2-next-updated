FROM node:18-alpine
RUN mkdir -p /app
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY *.json /app/
RUN npm ci
COPY ./ /app/

RUN npm run build

CMD [ "npm", "start" ]
EXPOSE 3000
