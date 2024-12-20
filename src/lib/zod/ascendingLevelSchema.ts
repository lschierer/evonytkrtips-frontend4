import type { AscendingLevel } from "../types/AscendingLevel.ts";
import { ascendingLevelNamesSchema } from "./ascendingLevelNamesSchema.ts";
import { buffSchema } from "./buffSchema.ts";
import { z } from "zod";

/**
 * @description The effect of one star of ascending
 */
export const ascendingLevelSchema = z
  .object({
    buffs: z.array(z.lazy(() => buffSchema)).max(10),
    level: z.lazy(() => ascendingLevelNamesSchema),
  })
  .describe("The effect of one star of ascending") as z.ZodType<AscendingLevel>;

export type AscendingLevelSchema = z.infer<typeof ascendingLevelSchema>;
