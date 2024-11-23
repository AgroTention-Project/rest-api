import { z, ZodType } from "zod";

export const createUserSchema = z.object({
  isAdmin: z.boolean().default(false).optional(),
  isExpert: z.boolean().default(false).optional(),
  company: z.string().optional(),
  roleAtCompany: z.string().optional(),
});

export type UserExtras = z.infer<typeof createUserSchema>;
