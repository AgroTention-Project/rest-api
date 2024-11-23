import express, { type Application } from "express";
import { APP_PORT } from "./configs";
import { appsErrorLogger, appsLogger } from "@/utils/logger";

const app: Application = express();

app.use(appsErrorLogger);
app.use(appsLogger);

app.listen(APP_PORT, () => {
  console.log(`App running on ${APP_PORT}.`);
});
