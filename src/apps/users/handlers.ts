import type { Handler, Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getUserService,
  updateUserService,
} from "./services";
import type { UserExtras } from "./models";

export const createUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userUid } = req.params;
  const data: UserExtras = req.body;
  await createUserService(userUid, data);

  res.status(201);
  res.json({
    success: true,
  });
};

export const updateUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userUid } = req.params;
  const data: UserExtras = req.body;

  await updateUserService(userUid, data);

  res.status(200);
  res.json({
    success: true,
  });
};

export const getUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userUid } = req.params;

  const user = await getUserService(userUid);

  res.status(200);
  res.json({
    success: true,
    userUid,
    data: user,
  });
};

export const deleteUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userUid } = req.params;

  await deleteUserService(userUid);

  res.status(200);
  res.json({
    success: true,
  });
};
