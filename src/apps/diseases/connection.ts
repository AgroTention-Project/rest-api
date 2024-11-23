import { firestore } from "@/libs/firebase";
import type { CollectionReference } from "firebase-admin/firestore";
import type { Disease } from "@/apps/diseases/models";

const diseaseConnection: CollectionReference<Disease> = firestore.collection(
  "plants"
) as CollectionReference<Disease>;

export default diseaseConnection;
