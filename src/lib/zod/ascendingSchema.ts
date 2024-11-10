import type { Ascending } from "../types/Ascending.ts";
import { ascendingLevelNamesSchema } from "./ascendingLevelNamesSchema.ts";
import { ascendingLevelSchema } from "./ascendingLevelSchema.ts";
import { z } from "zod";

/**
 * @description The overall effeects of Ascending a General
 */
export const ascendingSchema = z
  .object({
    levels: z.array(z.lazy(() => ascendingLevelSchema)).max(15),
    activeLevel: z.lazy(() => ascendingLevelNamesSchema).optional(),
  })
  .describe(
    "The overall effeects of Ascending a General"
  ) as z.ZodType<Ascending>;

export type AscendingSchema = z.infer<typeof ascendingSchema>;
