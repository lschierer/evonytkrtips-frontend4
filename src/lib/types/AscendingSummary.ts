import type { AscendingLevelNames } from "./AscendingLevelNames.js";
import type { Buff } from "./Buff.js";

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
