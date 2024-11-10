import type { BadRequest } from "../types/BadRequest.ts";
import { z } from "zod";

export const badRequestSchema = z.object({
  errors: z
    .array(z.object({ message: z.string().max(1000) }))
    .max(10)
    .optional(),
  message: z.string().max(1000),
}) as z.ZodType<BadRequest>;

export type BadRequestSchema = z.infer<typeof badRequestSchema>;
