import { FirebaseFirestoreError } from "firebase-admin/firestore";
import userConnection from "./connection";
import type { UserExtras } from "./models";

export const createUserService = async (userUid: string, data: UserExtras) => {
  try {
    const doc = userConnection.doc(userUid);
    await doc.create(data);
  } catch (e) {
    if (e instanceof FirebaseFirestoreError) {
      throw Error; // TODO Handle error
    } else {
      throw Error; // TODO Handle error
    }
  }
};

export const updateUserService = async (userUid: string, data: UserExtras) => {
  try {
    const _ = await userConnection.doc(userUid).update(data);
  } catch (e) {
    if (e instanceof FirebaseFirestoreError) {
      throw Error; // TODO Handle error
    } else {
      throw Error; // TODO Handle error
    }
  }
};

export const getUserService = async (userUid: string): Promise<UserExtras> => {
  const doc = userConnection.doc(userUid);
  const user = (await doc.get()).data();
  if (!user) {
    throw Error; //TODO Handle error
  }

  return user;
};

export const deleteUserService = async (userUid: string) => {
  try {
    const doc = userConnection.doc(userUid);
    await doc.delete({ exists: true });
  } catch (e) {
    if (e instanceof FirebaseFirestoreError) {
      throw Error; // TODO Handle error
    } else {
      throw Error; // TODO Handle error
    }
  }
};
