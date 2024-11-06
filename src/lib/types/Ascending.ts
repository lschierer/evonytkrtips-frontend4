import type { AscendingLevel } from "./AscendingLevel.js";
import type { AscendingLevelNames } from "./AscendingLevelNames.js";

/**
 * @description The overall effeects of Ascending a General
 */
export type Ascending = {
  /**
   * @type array
   */
  levels: AscendingLevel[];
  activeLevel?: AscendingLevelNames;
};
