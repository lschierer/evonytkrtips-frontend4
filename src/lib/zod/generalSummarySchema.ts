import type { GeneralSummary } from "../types/GeneralSummary.js";
import { generalEvaluationTypesSchema } from "./generalEvaluationTypesSchema.js";
import { z } from "zod";

/**
 * @description The minimal information necessary to find a General
 */
export const generalSummarySchema = z
  .object({
    name: z.string().max(1000).optional(),
    type: z
      .union([
        z.lazy(() => generalEvaluationTypesSchema),
        z.array(z.lazy(() => generalEvaluationTypesSchema)).max(5),
      ])
      .optional(),
  })
  .describe(
    "The minimal information necessary to find a General"
  ) as z.ZodType<GeneralSummary>;

export type GeneralSummarySchema = z.infer<typeof generalSummarySchema>;
