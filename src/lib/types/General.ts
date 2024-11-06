import type { Ascending } from "./Ascending.js";
import type { AscendingSummary } from "./AscendingSummary.js";
import type { BasicAttributes } from "./BasicAttributes.js";
import type { BasicAttributesSummary } from "./BasicAttributesSummary.js";
import type { BuiltinBook } from "./BuiltinBook.js";
import type { GeneralEvaluationTypes } from "./GeneralEvaluationTypes.js";
import type { Skin } from "./Skin.js";
import type { Speciality } from "./Speciality.js";
import type { SpecialityEffect } from "./SpecialityEffect.js";
import type { StandardBook } from "./StandardBook.js";

export type General = {
  /**
   * @type string
   */
  name: string;
  skin?: string | Skin;
  type: GeneralEvaluationTypes | GeneralEvaluationTypes[];
  /**
   * @type integer | undefined, int32
   */
  level?: number;
  ascending: boolean | Ascending | AscendingSummary;
  otherBooks?: string[] | StandardBook[];
  builtInBook: string | BuiltinBook;
  specialities: string[] | Speciality[] | SpecialityEffect[];
  basicAttributes: BasicAttributes | BasicAttributesSummary;
  id: string;
};
