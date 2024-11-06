export const targetedTypesEnum = {
  "Ground Troops": "Ground Troops",
  "Mounted Troops": "Mounted Troops",
  "Ranged Troops": "Ranged Troops",
  "Siege Machines": "Siege Machines",
  "All Troops": "All Troops",
  Monsters: "Monsters",
} as const;

export type TargetedTypesEnum =
  (typeof targetedTypesEnum)[keyof typeof targetedTypesEnum];

export type TargetedTypes = TargetedTypesEnum;
