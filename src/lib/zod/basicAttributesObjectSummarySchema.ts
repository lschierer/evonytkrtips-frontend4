import type { BasicAttributesObjectSummary } from "../types/BasicAttributesObjectSummary.js";
import { z } from "zod";

 /**
 * @description A simplified representation of a BasicAttributesObject, typically used in list views.
 */
export const basicAttributesObjectSummarySchema = z.object({ "base": z.number().optional(), "total": z.number().optional(), "increment": z.number().optional() }).describe("A simplified representation of a BasicAttributesObject, typically used in list views.") as z.ZodType<BasicAttributesObjectSummary>;

 export type BasicAttributesObjectSummarySchema = z.infer<typeof basicAttributesObjectSummarySchema>;