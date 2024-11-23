import type { Disease } from "./models";
import diseaseConnection from "./connection";
import HttpError from "@/utils/error";

export const getDiseaseService = async (
  diseaseScientificName: string
): Promise<Disease> => {
  const doc = diseaseConnection.doc(diseaseScientificName);
  try {
    const disease = (await doc.get()).data();
    if (!disease) {
      throw new HttpError("disease not found", 404);
    }
    return disease;
  } catch (error) {
    throw Error;
  }
};