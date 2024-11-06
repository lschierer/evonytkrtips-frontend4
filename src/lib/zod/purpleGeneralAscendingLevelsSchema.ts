import type { PurpleGeneralAscendingLevels } from "../types/PurpleGeneralAscendingLevels.js";
import { z } from "zod";

/**
 * @description Ascending Levels for Purple Generals
 */
export const purpleGeneralAscendingLevelsSchema = z
  .enum(["1purple", "2purple", "3purple", "4purple", "5purple"])
  .describe(
    "Ascending Levels for Purple Generals",
  ) as z.ZodType<PurpleGeneralAscendingLevels>;

export type PurpleGeneralAscendingLevelsSchema = z.infer<
  typeof purpleGeneralAscendingLevelsSchema
>;
