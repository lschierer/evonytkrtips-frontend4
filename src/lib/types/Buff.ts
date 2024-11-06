import type { BuffAttributes } from "./BuffAttributes.js";
import type { Condition } from "./Condition.js";
import type { TargetedTypes } from "./TargetedTypes.js";

 export const valueUnitEnum = {
    "flat": "flat",
    "percentage": "percentage"
} as const;

 export type ValueUnitEnum = (typeof valueUnitEnum)[keyof typeof valueUnitEnum];

 export type Buff = {
    /**
     * @type object
    */
    value: {
        /**
         * @default "percentage"
         * @type string
        */
        unit: ValueUnitEnum;
        /**
         * @type number, float
        */
        number: number;
    };
    /**
     * @default false
     * @type boolean | undefined
    */
    passive?: boolean;
    attribute: (BuffAttributes | BuffAttributes[]);
    conditions?: (Condition | Condition[]);
    targetedTypes?: (TargetedTypes | TargetedTypes[]);
};