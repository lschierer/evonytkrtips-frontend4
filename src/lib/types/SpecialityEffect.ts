import type { Buff } from "./Buff.js";
import type { SpecialityLevelNames } from "./SpecialityLevelNames.js";

/**
 * @description The Effective Buff Provided by a Speciality at a particular level
 */
export type SpecialityEffect = {
  /**
   * @type array | undefined
   */
  buff?: Buff[];
  /**
   * @type string
   */
  name: string;
  activeLevel: SpecialityLevelNames;
};
