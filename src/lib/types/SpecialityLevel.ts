import type { Buff } from "./Buff.js";
import type { SpecialityLevelNames } from "./SpecialityLevelNames.js";

 export type SpecialityLevel = {
    /**
     * @type array
    */
    Buffs: Buff[];
    /**
     * @type string
    */
    level: SpecialityLevelNames;
};