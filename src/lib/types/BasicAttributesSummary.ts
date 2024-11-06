import type { BasicAttributesObjectSummary } from "./BasicAttributesObjectSummary.js";

 /**
 * @description A summary of the values that the basic attributes have at a particular level, after they have been computed for that level.
*/
export type BasicAttributesSummary = {
    /**
     * @type object
    */
    attack: BasicAttributesObjectSummary;
    /**
     * @type object
    */
    defense: BasicAttributesObjectSummary;
    /**
     * @type object
    */
    politics: BasicAttributesObjectSummary;
    /**
     * @type object
    */
    leadership: BasicAttributesObjectSummary;
};