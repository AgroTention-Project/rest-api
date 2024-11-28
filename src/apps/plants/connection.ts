import { firestore } from "@/libs/firebase";
import type { CollectionReference } from "firebase-admin/firestore";
import type { Plant } from "@/apps/plants/models";

const plantConnection: CollectionReference<Plant> = firestore.collection(
  "plants",
) as CollectionReference<Plant>;

export default plantConnection;
