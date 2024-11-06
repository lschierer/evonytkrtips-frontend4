import type { AscendingLevelNames } from "../types/AscendingLevelNames.js";
import { purpleGeneralAscendingLevelsSchema } from "./purpleGeneralAscendingLevelsSchema.js";
import { redGeneralAscendingLevelsSchema } from "./redGeneralAscendingLevelsSchema.js";
import { z } from "zod";

/**
 * @description A general Ascends as either a Red or a Purple General but not both.\n
 */
export const ascendingLevelNamesSchema = z
  .union([
    z.literal("none"),
    z.lazy(() => redGeneralAscendingLevelsSchema),
    z.lazy(() => purpleGeneralAscendingLevelsSchema),
  ])
  .default("none")
  .describe(
    "A general Ascends as either a Red or a Purple General but not both.\n"
  ) as z.ZodType<AscendingLevelNames>;

export type AscendingLevelNamesSchema = z.infer<
  typeof ascendingLevelNamesSchema
>;
