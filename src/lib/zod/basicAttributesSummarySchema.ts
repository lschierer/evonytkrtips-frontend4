import type { BasicAttributesSummary } from "../types/BasicAttributesSummary.ts";
import { basicAttributesObjectSummarySchema } from "./basicAttributesObjectSummarySchema.ts";
import { z } from "zod";

/**
 * @description A summary of the values that the basic attributes have at a particular level, after they have been computed for that level.
 */
export const basicAttributesSummarySchema = z
  .object({
    attack: basicAttributesObjectSummarySchema,
    defense: basicAttributesObjectSummarySchema,
    politics: basicAttributesObjectSummarySchema,
    leadership: basicAttributesObjectSummarySchema,
  })
  .describe(
    "A summary of the values that the basic attributes have at a particular level, after they have been computed for that level. "
  ) as z.ZodType<BasicAttributesSummary>;

export type BasicAttributesSummarySchema = z.infer<
  typeof basicAttributesSummarySchema
>;
