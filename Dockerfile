FROM node:12

# canvas

WORKDIR /app/canvas

COPY canvas/package*.json ./

RUN yarn

COPY canvas .

RUN yarn link

# docs

WORKDIR /app/docsapp

COPY docsapp/package*.json ./

RUN yarn

COPY docsapp .

RUN yarn link "@rsbear/canvas"

# Start the app

EXPOSE 3000

CMD ["yarn", "dev"]