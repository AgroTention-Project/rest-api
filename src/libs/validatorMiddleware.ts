import HttpError from "@/utils/error";
import type { Handler, NextFunction, Request, Response } from "express";
import { ZodError, type ZodType } from "zod";

interface ValidationMiddleware {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const validatorMiddleware = <T>(schema: ZodType<T>): ValidationMiddleware => {
  return async (
    req: Request,
    _: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { body } = req;
    try {
      const valid: T = schema.parse(body);
      req.body = valid;
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        // TODO Better error message
        const { issues } = e;
        const { message } = issues[0];
        throw new HttpError(message, 400);
      } else {
        throw new HttpError("unhandeled client error", 500);
      }
    }
  };
};

export default validatorMiddleware;
