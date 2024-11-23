import type { Handler, Request, Response } from "express";
import { createUserService } from "./services";

export const createUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {
  await createUserService(req.params.userUid, req.body);

  res.status(201);
  res.json({
    success: true,
  });
};

export const updateUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {};

export const getUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {};

export const deleteUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {};
