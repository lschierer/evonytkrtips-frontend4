import type { SpecialityLevel } from "./SpecialityLevel.js";
import type { SpecialityLevelNames } from "./SpecialityLevelNames.js";

export type Speciality = {
  /**
   * @type string
   */
  name: string;
  /**
   * @type array
   */
  levels: SpecialityLevel[];
  /**
   * @type string | undefined
   */
  activeLevel?: SpecialityLevelNames;
};
