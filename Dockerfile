FROM oven/bun:latest

WORKDIR /dist

COPY dist/app.js .


ENV APP_PORT=8080
ENV GOOGLE_APPLICATION_CREDENTIALS=/service-account.json

EXPOSE 8080

CMD [ "bun", "run", "/dist/app.js" ]