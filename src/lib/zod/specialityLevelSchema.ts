import type { SpecialityLevel } from "../types/SpecialityLevel.ts";
import { buffSchema } from "./buffSchema.ts";
import { specialityLevelNamesSchema } from "./specialityLevelNamesSchema.ts";
import { z } from "zod";

export const specialityLevelSchema = z.object({
  Buffs: z.array(z.lazy(() => buffSchema)).max(10),
  level: z.lazy(() => specialityLevelNamesSchema),
}) as z.ZodType<SpecialityLevel>;

export type SpecialityLevelSchema = z.infer<typeof specialityLevelSchema>;
