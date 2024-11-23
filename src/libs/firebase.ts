import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseApp = initializeApp({ credential: applicationDefault() });

export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
