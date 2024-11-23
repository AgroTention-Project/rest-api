import type { Plant } from "./models";
import plantConnection from "./connection";

export const getPlantService = async (
  plantScientificName: string
): Promise<Plant> => {
  const doc = plantConnection.doc(plantScientificName);
  try {
    const plant = (await doc.get()).data();
    if (!plant) {
      throw Error; //TODO Handle error
    }

    return plant;
  } catch (error) {
    throw Error;
  }
};
