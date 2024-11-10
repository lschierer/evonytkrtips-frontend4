import type { Buff } from "./Buff.ts";
import type { SpecialityLevelNames } from "./SpecialityLevelNames.ts";

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
