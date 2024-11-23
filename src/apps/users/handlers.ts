import type { Handler, Request, Response } from "express";

export const createUserHandler: Handler = async (
  req: Request,
  res: Response
): Promise<void> => {};

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
