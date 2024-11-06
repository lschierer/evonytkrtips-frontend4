import type { GeneralEvaluationTypes } from "./GeneralEvaluationTypes.js";
import type { GeneralListItem } from "./GeneralListItem.js";

 export type GeneralList = {
    /**
     * @type string
    */
    type: GeneralEvaluationTypes;
    /**
     * @type array
    */
    members: GeneralListItem[];
};