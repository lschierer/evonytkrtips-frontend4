import type { GeneralEvaluationTypes } from "./GeneralEvaluationTypes.ts";

/**
 * @description The minimal information necessary to find a General
 */
export type GeneralSummary = {
  /**
   * @type string | undefined
   */
  name?: string;
  type?: GeneralEvaluationTypes | GeneralEvaluationTypes[];
};
