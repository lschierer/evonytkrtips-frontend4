import type { GeneralEvaluationTypes } from "../types/GeneralEvaluationTypes.js";
import { z } from "zod";

 export const generalEvaluationTypesSchema = z.enum(["ground_specialist", "ranged_specialist", "mounted_specialist", "siege_specialist", "mayor", "wall_general", "officer"]) as z.ZodType<GeneralEvaluationTypes>;

 export type GeneralEvaluationTypesSchema = z.infer<typeof generalEvaluationTypesSchema>;