import type { Buff } from "./Buff.ts";
import type { SpecialityLevelNames } from "./SpecialityLevelNames.ts";

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
