import type { AscendingLevelNames } from "./AscendingLevelNames.ts";
import type { Buff } from "./Buff.ts";

/**
 * @description The effect of one star of ascending
 */
export type AscendingLevel = {
  /**
   * @type array
   */
  buffs: Buff[];
  level: AscendingLevelNames;
};
