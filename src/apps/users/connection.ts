import { firestore } from "@/libs/firebase";
import type { UserExtras } from "@/apps/users/models";
import type { CollectionReference } from "firebase-admin/firestore";

const userConnection: CollectionReference<UserExtras> = firestore.collection(
  "users",
) as CollectionReference<UserExtras>;

export default userConnection;
