import type { Ascending } from "./Ascending.ts";
import type { AscendingSummary } from "./AscendingSummary.ts";
import type { BasicAttributes } from "./BasicAttributes.ts";
import type { BasicAttributesSummary } from "./BasicAttributesSummary.ts";
import type { BuiltinBook } from "./BuiltinBook.ts";
import type { GeneralEvaluationTypes } from "./GeneralEvaluationTypes.ts";
import type { Skin } from "./Skin.ts";
import type { Speciality } from "./Speciality.ts";
import type { SpecialityEffect } from "./SpecialityEffect.ts";
import type { StandardBook } from "./StandardBook.ts";

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
