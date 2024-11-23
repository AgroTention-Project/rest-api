import express, { type Application } from "express";
import { APP_PORT } from "./configs";

const app: Application = express();

app.listen(APP_PORT, () => {
  console.log(`App running on ${APP_PORT}`);
});
