import type { Handler, Request, Response } from "express";
import { getPlantService } from "./services";

export const getPlantHandler: Handler = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const { plantScientificName } = req.params;

	const plant = await getPlantService(plantScientificName);

	res.status(200);
	res.json({
		success: true,
		plantScientificName,
		data: plant,
	});
};
