import { Router } from "express";
import { getDiseaseHandler } from "./handler";

const diseasesRouter: Router = Router();

diseasesRouter.get('/diseases/:diseaseScientificName', getDiseaseHandler);

export default diseasesRouter;