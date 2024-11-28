import { Router } from "express";
import { getPlantHandler } from "./handler";
const scansRouter: Router = Router();

scansRouter.get("/plants/:plantScientificName", getPlantHandler);

export default scansRouter;
