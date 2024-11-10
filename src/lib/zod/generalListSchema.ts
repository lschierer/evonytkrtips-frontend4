import type { GeneralList } from "../types/GeneralList.ts";
import { generalEvaluationTypesSchema } from "./generalEvaluationTypesSchema.ts";
import { generalListItemSchema } from "./generalListItemSchema.ts";
import { z } from "zod";

export const generalListSchema = z.object({
  type: generalEvaluationTypesSchema,
  members: z.array(generalListItemSchema).max(1000),
}) as z.ZodType<GeneralList>;

export type GeneralListSchema = z.infer<typeof generalListSchema>;
