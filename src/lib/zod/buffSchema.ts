import type { Buff } from "../types/Buff.ts";
import { buffAttributesSchema } from "./buffAttributesSchema.ts";
import { conditionSchema } from "./conditionSchema.ts";
import { targetedTypesSchema } from "./targetedTypesSchema.ts";
import { z } from "zod";

export const buffSchema = z.object({
  value: z.object({
    unit: z.enum(["flat", "percentage"]).default("percentage"),
    number: z.number().min(0),
  }),
  passive: z.boolean().default(false),
  attribute: z.union([
    z.lazy(() => buffAttributesSchema),
    z.array(z.lazy(() => buffAttributesSchema)).max(10),
  ]),
  conditions: z
    .union([
      z.lazy(() => conditionSchema),
      z.array(z.lazy(() => conditionSchema)).max(10),
    ])
    .optional(),
  targetedTypes: z
    .union([
      z.lazy(() => targetedTypesSchema),
      z.array(z.lazy(() => targetedTypesSchema)).max(5),
    ])
    .optional(),
}) as z.ZodType<Buff>;

export type BuffSchema = z.infer<typeof buffSchema>;
