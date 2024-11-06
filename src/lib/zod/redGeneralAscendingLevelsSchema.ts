import type { RedGeneralAscendingLevels } from "../types/RedGeneralAscendingLevels.js";
import { z } from "zod";

/**
 * @description AscendingLevels for Red Generals
 */
export const redGeneralAscendingLevelsSchema = z
  .enum(["1red", "2red", "3red", "4red", "5red"])
  .describe(
    "AscendingLevels for Red Generals",
  ) as z.ZodType<RedGeneralAscendingLevels>;

export type RedGeneralAscendingLevelsSchema = z.infer<
  typeof redGeneralAscendingLevelsSchema
>;
