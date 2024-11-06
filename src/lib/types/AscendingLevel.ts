import type { AscendingLevelNames } from "./AscendingLevelNames.js";
import type { Buff } from "./Buff.js";

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