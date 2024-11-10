import type { General } from "../types/General.ts";
import { ascendingSchema } from "./ascendingSchema.ts";
import { ascendingSummarySchema } from "./ascendingSummarySchema.ts";
import { basicAttributesSchema } from "./basicAttributesSchema.ts";
import { basicAttributesSummarySchema } from "./basicAttributesSummarySchema.ts";
import { builtinBookSchema } from "./builtinBookSchema.ts";
import { generalEvaluationTypesSchema } from "./generalEvaluationTypesSchema.ts";
import { skinSchema } from "./skinSchema.ts";
import { specialityEffectSchema } from "./specialityEffectSchema.ts";
import { specialitySchema } from "./specialitySchema.ts";
import { standardBookSchema } from "./standardBookSchema.ts";
import { z } from "zod";

export const generalSchema = z.object({
  name: z.string().max(1000),
  skin: z.union([skinSchema, z.string()]).optional(),
  type: z.union([
    generalEvaluationTypesSchema,
    z.array(generalEvaluationTypesSchema).max(5),
  ]),
  level: z.number().int().min(1).max(45).optional(),
  ascending: z.union([z.boolean(), ascendingSchema, ascendingSummarySchema]),
  otherBooks: z
    .union([
      z.array(z.string().max(1000)).max(4),
      z.array(standardBookSchema).max(4),
    ])
    .optional(),
  builtInBook: z.union([builtinBookSchema, z.string()]),
  specialities: z.union([
    z.array(z.string().max(1000)).max(5),
    z.array(specialitySchema).max(5),
    z.array(specialityEffectSchema).max(5),
  ]),
  basicAttributes: z.union([
    basicAttributesSchema,
    basicAttributesSummarySchema,
  ]),
  id: z.string().uuid(),
}) as z.ZodType<General>;

export type GeneralSchema = z.infer<typeof generalSchema>;
