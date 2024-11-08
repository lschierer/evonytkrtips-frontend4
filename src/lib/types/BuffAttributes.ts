export const buffAttributesEnum = {
  Attack: "Attack",
  Attack_Speed: "Attack_Speed",
  Death_to_Survival: "Death_to_Survival",
  Death_to_Soul: "Death_to_Soul",
  Death_to_Wounded: "Death_to_Wounded",
  Defense: "Defense",
  Deserter_Capacity: "Deserter_Capacity",
  Double_Items_Drop_Rate: "Double_Items_Drop_Rate",
  HP: "HP",
  Healing_Speed: "Healing_Speed",
  Hospital_Capacity: "Hospital_Capacity",
  Leadership: "Leadership",
  Load: "Load",
  March_Size_Capacity: "March_Size_Capacity",
  March_Time: "March_Time",
  Marching_Speed: "Marching_Speed",
  Marching_Speed_to_Monsters: "Marching_Speed_to_Monsters",
  Politics: "Politics",
  Rally_Capacity: "Rally_Capacity",
  Range: "Range",
  Resources_Production: "Resources_Production",
  Stamina_Cost: "Stamina_Cost",
  SubCity_Construction_Speed: "SubCity_Construction_Speed",
  SubCity_Gold_Production: "SubCity_Gold_Production",
  SubCity_Training_Speed: "SubCity_Training_Speed",
  SubCity_Troop_Capacity: "SubCity_Troop_Capacity",
  Training_Capacity: "Training_Capacity",
  Training_Speed: "Training_Speed",
  Wounded_to_Death: "Wounded_to_Death",
} as const;

export type BuffAttributesEnum =
  (typeof buffAttributesEnum)[keyof typeof buffAttributesEnum];

export type BuffAttributes = BuffAttributesEnum;
