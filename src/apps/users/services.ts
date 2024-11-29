import { FirebaseFirestoreError } from "firebase-admin/firestore";
import userConnection from "./connection";
import type { UserExtras } from "./models";
import HttpError from "@/utils/error";

export const createUserService = async (userUid: string, data: UserExtras) => {
	try {
		const doc = userConnection.doc(userUid);
		await doc.create(data);
	} catch (e) {
		if (e instanceof FirebaseFirestoreError) {
			throw new HttpError(e.message, 424);
		} else {
			throw new HttpError("unhandeled client error", 500);
		}
	}
};

export const updateUserService = async (userUid: string, data: UserExtras) => {
	try {
		const _ = await userConnection.doc(userUid).update(data);
	} catch (e) {
		if (e instanceof FirebaseFirestoreError) {
			throw new HttpError(e.message, 424);
		} else {
			throw new HttpError("unhandeled client error", 500);
		}
	}
};

export const getUserService = async (userUid: string): Promise<UserExtras> => {
	const doc = userConnection.doc(userUid);
	const user = (await doc.get()).data();
	if (!user) {
		throw new HttpError("user not found", 404);
	}

	return user;
};

export const deleteUserService = async (userUid: string) => {
	try {
		const doc = userConnection.doc(userUid);
		await doc.delete({ exists: true });
	} catch (e) {
		if (e instanceof FirebaseFirestoreError) {
			throw new HttpError(e.message, 424);
		} else {
			throw new HttpError("unhandeled client error", 500);
		}
	}
};
