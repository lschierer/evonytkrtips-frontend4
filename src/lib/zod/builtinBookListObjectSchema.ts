import type { BuiltinBookListObject } from "../types/BuiltinBookListObject.ts";
import { z } from "zod";

/**
 * @description List Item version of the BuiltInBook
 */
export const builtinBookListObjectSchema = z
  .object({
    id: z.string().uuid().max(100).optional(),
    name: z.string().max(100),
  })
  .describe(
    "List Item version of the BuiltInBook"
  ) as z.ZodType<BuiltinBookListObject>;

export type BuiltinBookListObjectSchema = z.infer<
  typeof builtinBookListObjectSchema
>;
