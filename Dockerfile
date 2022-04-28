FROM node:18-alpine

LABEL maintainer="geetchoubey@gmail.com"

WORKDIR /app

ENV PORT 8080
ENV AWS_ACCESS_KEY_ID ''
ENV AWS_SECRET_ACCESS_KEY ''
ENV AWS_DEFAULT_REGION us-east-1
ENV BUCKET_NAME ''

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE $PORT

CMD [ "node", "./bin/www" ]