import type { Handler, NextFunction, Request, Response } from "express";
import { ZodError, type ZodType } from "zod";

interface ValidationMiddleware {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const validatorMiddleware = <T>(schema: ZodType<T>): ValidationMiddleware => {
  return async (
    req: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> => {
    const { body } = req;
    try {
      const valid: T = schema.parse(body);
      req.body = valid;
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        throw Error; // TODO Handle error
      } else {
        throw Error; // TODO Handle error
      }
    }
  };
};

export default validatorMiddleware;
