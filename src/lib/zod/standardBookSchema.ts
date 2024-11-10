import type { StandardBook } from "../types/StandardBook.ts";
import { buffSchema } from "./buffSchema.ts";
import { z } from "zod";

/**
 * @description Standard Books that can be added to a General
 */
export const standardBookSchema = z
  .object({
    id: z.string().uuid().max(100),
    name: z.string().max(1000),
    buffs: z.array(z.lazy(() => buffSchema)).max(10),
    level: z.number().int().min(1).max(4),
  })
  .describe(
    "Standard Books that can be added to a General"
  ) as z.ZodType<StandardBook>;

export type StandardBookSchema = z.infer<typeof standardBookSchema>;
