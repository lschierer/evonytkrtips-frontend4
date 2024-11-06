import type { GeneralList } from "../types/GeneralList.js";
import { generalEvaluationTypesSchema } from "./generalEvaluationTypesSchema.js";
import { generalListItemSchema } from "./generalListItemSchema.js";
import { z } from "zod";

export const generalListSchema = z.object({
  type: z.lazy(() => generalEvaluationTypesSchema),
  members: z.array(z.lazy(() => generalListItemSchema)).max(1000),
}) as z.ZodType<GeneralList>;

export type GeneralListSchema = z.infer<typeof generalListSchema>;
