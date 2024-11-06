import type { Speciality } from "../types/Speciality.js";
import { specialityLevelNamesSchema } from "./specialityLevelNamesSchema.js";
import { specialityLevelSchema } from "./specialityLevelSchema.js";
import { z } from "zod";

export const specialitySchema = z.object({
  name: z.string().max(1000),
  levels: z.array(z.lazy(() => specialityLevelSchema)).max(6),
  activeLevel: z.lazy(() => specialityLevelNamesSchema).optional(),
}) as z.ZodType<Speciality>;

export type SpecialitySchema = z.infer<typeof specialitySchema>;
