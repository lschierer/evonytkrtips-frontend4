export const purpleGeneralAscendingLevelsEnum = {
  "1purple": "1purple",
  "2purple": "2purple",
  "3purple": "3purple",
  "4purple": "4purple",
  "5purple": "5purple",
} as const;

export type PurpleGeneralAscendingLevelsEnum =
  (typeof purpleGeneralAscendingLevelsEnum)[keyof typeof purpleGeneralAscendingLevelsEnum];

/**
 * @description Ascending Levels for Purple Generals
 */
export type PurpleGeneralAscendingLevels = PurpleGeneralAscendingLevelsEnum;
