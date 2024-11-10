import type { SpecialityLevel } from "./SpecialityLevel.ts";
import type { SpecialityLevelNames } from "./SpecialityLevelNames.ts";

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
