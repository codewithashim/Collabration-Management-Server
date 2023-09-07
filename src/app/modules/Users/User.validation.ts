import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional(),
    photo: z.string().optional(),
  }),
});

export const createUserValidator = {
  createUserZodSchema,
};
