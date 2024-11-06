import type { TargetedTypes } from "../types/TargetedTypes.js";
import { z } from "zod";

export const targetedTypesSchema = z.enum([
  "Ground Troops",
  "Mounted Troops",
  "Ranged Troops",
  "Siege Machines",
  "All Troops",
  "Monsters",
]) as z.ZodType<TargetedTypes>;

export type TargetedTypesSchema = z.infer<typeof targetedTypesSchema>;
