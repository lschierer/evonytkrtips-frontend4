export const specialityLevelNamesEnum = {
  None: "None",
  Green: "Green",
  Blue: "Blue",
  Purple: "Purple",
  Orange: "Orange",
  Gold: "Gold",
} as const;

export type SpecialityLevelNamesEnum =
  (typeof specialityLevelNamesEnum)[keyof typeof specialityLevelNamesEnum];

export type SpecialityLevelNames = SpecialityLevelNamesEnum;
