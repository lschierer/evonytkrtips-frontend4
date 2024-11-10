import type { AscendingLevelNames } from "./AscendingLevelNames.ts";
import type { Buff } from "./Buff.ts";

/**
 * @description The buffs provided foor a general ascended at a particualr number of stars.\n
 */
export type AscendingSummary = {
  /**
   * @type array
   */
  buffs: Buff[];
  activeLevel: AscendingLevelNames;
};
