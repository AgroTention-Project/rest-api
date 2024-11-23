import type { Plant } from "./models";
import plantConnection from "./connection";
import HttpError from "@/utils/error";

export const getPlantService = async (
  plantScientificName: string
): Promise<Plant> => {
  const doc = plantConnection.doc(plantScientificName);
  try {
    const plant = (await doc.get()).data();
    if (!plant) {
      throw new HttpError("plant not found", 404);
    }
    return plant;
  } catch (error) {
    throw Error;
  }
};
