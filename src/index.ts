import express, { type Application } from "express";
import { APP_PORT } from "./configs";
import { appsErrorLogger, appsLogger } from "@/utils/logger";
import usersRouter from "@/apps/users";
// import scansApp from "@/apps/scans";
// import platsApp from "@/apps/plants";
// import diseasesApp from "@/apps/diseases";

const app: Application = express();

app.use(appsErrorLogger);
app.use(appsLogger);

app.use("/", usersRouter);
// app.use("/", platsApp);

app.listen(APP_PORT, () => {
	console.log(`App running on ${APP_PORT}.`);
});
