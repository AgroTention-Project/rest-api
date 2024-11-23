FROM oven/bun:latest

WORKDIR /

COPY dist .

ENV APP_PORT=8080

EXPOSE 8080

CMD [ "bun", "run", "/dist/app.js" ]