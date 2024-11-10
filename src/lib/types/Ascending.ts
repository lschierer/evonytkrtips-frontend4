import type { AscendingLevel } from "./AscendingLevel.ts";
import type { AscendingLevelNames } from "./AscendingLevelNames.ts";

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
