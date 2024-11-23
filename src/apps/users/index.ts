import { Router } from "express";
import {
  createUserHandler,
  deleteUserHandler,
  getUserHandler,
  updateUserHandler,
} from "@/apps/users/handlers";

const usersRouter: Router = Router();
usersRouter.post("/users/:userUid/extras", createUserHandler);
usersRouter.get("/users/:userUid/extras", getUserHandler);
usersRouter.put("/users/:userUid/extras", updateUserHandler);
usersRouter.delete("/users/:userUid/extras", deleteUserHandler);

export default usersRouter;
