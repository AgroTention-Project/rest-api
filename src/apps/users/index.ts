import { Router } from "express";
import {
	createUserHandler,
	deleteUserHandler,
	getUserHandler,
	updateUserHandler,
} from "./handlers";
import validatorMiddleware from "@/libs/validatorMiddleware";
import { createUserSchema } from "./models";

const usersRouter: Router = Router();
usersRouter.post(
	"/users/:userUid/extras",
	validatorMiddleware(createUserSchema),
	createUserHandler,
);

usersRouter.get("/users/:userUid/extras", getUserHandler);
usersRouter.put("/users/:userUid/extras", updateUserHandler);
usersRouter.delete("/users/:userUid/extras", deleteUserHandler);

export default usersRouter;
