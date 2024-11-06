export const debuffConditionsEnum = {
    "Enemy": "Enemy",
    "Enemy_in_City": "Enemy_in_City",
    "Reduces_Enemy": "Reduces_Enemy",
    "Reduces_Enemy_in_Attack": "Reduces_Enemy_in_Attack",
    "Reduces_Enemy_with_a_Dragon": "Reduces_Enemy_with_a_Dragon",
    "Reduces_Enemy_with_a_Dragon_or_Spiritual_Beast": "Reduces_Enemy_with_a_Dragon_or_Spiritual_Beast",
    "Reduces": "Reduces"
} as const;

 export type DebuffConditionsEnum = (typeof debuffConditionsEnum)[keyof typeof debuffConditionsEnum];

 /**
 * @description Some Buffs are in fact Debuffs
*/
export type DebuffConditions = DebuffConditionsEnum;