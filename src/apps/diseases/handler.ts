import type { Handler, Request, Response } from "express";
import { getDiseaseService } from "./services";



export const getDiseaseHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { diseaseScientificName } = req.params;

  const disease = await getDiseaseService(diseaseScientificName);

  res.status(200);
  res.json({
    success: true,
    diseaseScientificName,
    data: disease,
  });
};
