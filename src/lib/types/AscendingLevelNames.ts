import type { PurpleGeneralAscendingLevels } from "./PurpleGeneralAscendingLevels.ts";
import type { RedGeneralAscendingLevels } from "./RedGeneralAscendingLevels.ts";

/**
 * @description A general Ascends as either a Red or a Purple General but not both.\n
 */
export type AscendingLevelNames =
  | "none"
  | RedGeneralAscendingLevels
  | PurpleGeneralAscendingLevels;
