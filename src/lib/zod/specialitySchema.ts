import type { Speciality } from "../types/Speciality.ts";
import { specialityLevelNamesSchema } from "./specialityLevelNamesSchema.ts";
import { specialityLevelSchema } from "./specialityLevelSchema.ts";
import { z } from "zod";

export const specialitySchema = z.object({
  name: z.string().max(1000),
  levels: z.array(z.lazy(() => specialityLevelSchema)).max(6),
  activeLevel: z.lazy(() => specialityLevelNamesSchema).optional(),
}) as z.ZodType<Speciality>;

export type SpecialitySchema = z.infer<typeof specialitySchema>;
