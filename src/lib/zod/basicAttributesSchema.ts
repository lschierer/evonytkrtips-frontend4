import type { BasicAttributes } from "../types/BasicAttributes.js";
import { basicAttributesObjectSchema } from "./basicAttributesObjectSchema.js";
import { z } from "zod";

export const basicAttributesSchema = z.object({
  attack: z.lazy(() => basicAttributesObjectSchema),
  defense: z.lazy(() => basicAttributesObjectSchema),
  politics: z.lazy(() => basicAttributesObjectSchema),
  leadership: z.lazy(() => basicAttributesObjectSchema),
}) as z.ZodType<BasicAttributes>;

export type BasicAttributesSchema = z.infer<typeof basicAttributesSchema>;
