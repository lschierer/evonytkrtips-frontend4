import type { BasicAttributesSummary } from "../types/BasicAttributesSummary.js";
import { basicAttributesObjectSummarySchema } from "./basicAttributesObjectSummarySchema.js";
import { z } from "zod";

/**
 * @description A summary of the values that the basic attributes have at a particular level, after they have been computed for that level.
 */
export const basicAttributesSummarySchema = z
  .object({
    attack: z.lazy(() => basicAttributesObjectSummarySchema),
    defense: z.lazy(() => basicAttributesObjectSummarySchema),
    politics: z.lazy(() => basicAttributesObjectSummarySchema),
    leadership: z.lazy(() => basicAttributesObjectSummarySchema),
  })
  .describe(
    "A summary of the values that the basic attributes have at a particular level, after they have been computed for that level. "
  ) as z.ZodType<BasicAttributesSummary>;

export type BasicAttributesSummarySchema = z.infer<
  typeof basicAttributesSummarySchema
>;
