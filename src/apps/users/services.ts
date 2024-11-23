import { FirebaseFirestoreError } from "firebase-admin/firestore";
import userConnection from "./connection";
import type { UserExtras } from "./models";

export const createUserService = async (userUid: string, data: UserExtras) => {
  try {
    const _ = await userConnection.doc(userUid).create(data);
  } catch (e) {
    if (e instanceof FirebaseFirestoreError) {
      throw Error; // TODO Handle error
    } else {
      throw Error; // TODO Handle error
    }
  }
};

export const updateUserService = async () => {};

export const getUserService = async () => {};

export const deleteUserService = async () => {};
