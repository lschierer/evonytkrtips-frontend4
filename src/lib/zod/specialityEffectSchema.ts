import type { SpecialityEffect } from "../types/SpecialityEffect.ts";
import { buffSchema } from "./buffSchema.ts";
import { specialityLevelNamesSchema } from "./specialityLevelNamesSchema.ts";
import { z } from "zod";

/**
 * @description The Effective Buff Provided by a Speciality at a particular level
 */
export const specialityEffectSchema = z
  .object({
    buff: z
      .array(z.lazy(() => buffSchema))
      .max(10)
      .optional(),
    name: z.string().max(1000),
    activeLevel: z.lazy(() => specialityLevelNamesSchema),
  })
  .describe(
    "The Effective Buff Provided by a Speciality at a particular level"
  ) as z.ZodType<SpecialityEffect>;

export type SpecialityEffectSchema = z.infer<typeof specialityEffectSchema>;
