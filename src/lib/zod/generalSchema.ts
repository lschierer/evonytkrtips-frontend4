import type { General } from "../types/General.js";
import { ascendingSchema } from "./ascendingSchema.js";
import { ascendingSummarySchema } from "./ascendingSummarySchema.js";
import { basicAttributesSchema } from "./basicAttributesSchema.js";
import { basicAttributesSummarySchema } from "./basicAttributesSummarySchema.js";
import { builtinBookSchema } from "./builtinBookSchema.js";
import { generalEvaluationTypesSchema } from "./generalEvaluationTypesSchema.js";
import { skinSchema } from "./skinSchema.js";
import { specialityEffectSchema } from "./specialityEffectSchema.js";
import { specialitySchema } from "./specialitySchema.js";
import { standardBookSchema } from "./standardBookSchema.js";
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
