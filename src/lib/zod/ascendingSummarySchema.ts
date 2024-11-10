import type { AscendingSummary } from "../types/AscendingSummary.ts";
import { ascendingLevelNamesSchema } from "./ascendingLevelNamesSchema.ts";
import { buffSchema } from "./buffSchema.ts";
import { z } from "zod";

/**
 * @description The buffs provided foor a general ascended at a particualr number of stars.\n
 */
export const ascendingSummarySchema = z
  .object({
    buffs: z.array(z.lazy(() => buffSchema)).max(10),
    activeLevel: z.lazy(() => ascendingLevelNamesSchema),
  })
  .describe(
    "The buffs provided foor a general ascended at a particualr number of stars.\n"
  ) as z.ZodType<AscendingSummary>;

export type AscendingSummarySchema = z.infer<typeof ascendingSummarySchema>;
