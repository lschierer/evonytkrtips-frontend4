import type { BasicAttributes } from "../types/BasicAttributes.ts";
import { basicAttributesObjectSchema } from "./basicAttributesObjectSchema.ts";
import { z } from "zod";

export const basicAttributesSchema = z.object({
  attack: z.lazy(() => basicAttributesObjectSchema),
  defense: z.lazy(() => basicAttributesObjectSchema),
  politics: z.lazy(() => basicAttributesObjectSchema),
  leadership: z.lazy(() => basicAttributesObjectSchema),
}) as z.ZodType<BasicAttributes>;

export type BasicAttributesSchema = z.infer<typeof basicAttributesSchema>;
