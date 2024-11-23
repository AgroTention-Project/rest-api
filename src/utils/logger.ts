import { logger, errorLogger } from "express-winston";
import winston from "winston";

export const appsLogger = logger({
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({
      filename: "logs/apps.log",
      format: winston.format.json(),
    }),
  ],
});

export const appsErrorLogger = errorLogger({
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({
      filename: "logs/errors.log",
      format: winston.format.json(),
    }),
  ],
});
