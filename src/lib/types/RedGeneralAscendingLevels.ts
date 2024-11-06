export const redGeneralAscendingLevelsEnum = {
    "1red": "1red",
    "2red": "2red",
    "3red": "3red",
    "4red": "4red",
    "5red": "5red"
} as const;

 export type RedGeneralAscendingLevelsEnum = (typeof redGeneralAscendingLevelsEnum)[keyof typeof redGeneralAscendingLevelsEnum];

 /**
 * @description AscendingLevels for Red Generals
*/
export type RedGeneralAscendingLevels = RedGeneralAscendingLevelsEnum;