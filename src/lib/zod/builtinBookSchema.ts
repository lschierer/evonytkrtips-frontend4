import type { BuiltinBook } from "../types/BuiltinBook.ts";
import { buffSchema } from "./buffSchema.ts";
import { z } from "zod";

/**
 * @description A General\'s Builtin Book
 */
export const builtinBookSchema = z
  .object({
    id: z.string().uuid().max(100),
    name: z.string().max(1000),
    text: z.string().max(2048),
    buffs: z
      .array(z.lazy(() => buffSchema))
      .max(10)
      .optional(),
  })
  .describe("A General's Builtin Book") as z.ZodType<BuiltinBook>;

export type BuiltinBookSchema = z.infer<typeof builtinBookSchema>;
