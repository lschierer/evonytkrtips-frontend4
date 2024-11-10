import type { GeneralEvaluationTypes } from "./GeneralEvaluationTypes.ts";
import type { GeneralListItem } from "./GeneralListItem.ts";

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
