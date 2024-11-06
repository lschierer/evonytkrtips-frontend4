import type { BasicAttributesObject } from "../types/BasicAttributesObject.js";
import { z } from "zod";

export const basicAttributesObjectSchema = z.object({
  base: z.number().min(0),
  total: z.number().min(0),
  increment: z.number().min(0),
}) as z.ZodType<BasicAttributesObject>;

export type BasicAttributesObjectSchema = z.infer<
  typeof basicAttributesObjectSchema
>;
