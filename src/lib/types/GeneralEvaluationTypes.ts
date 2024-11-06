export const generalEvaluationTypesEnum = {
  ground_specialist: "ground_specialist",
  ranged_specialist: "ranged_specialist",
  mounted_specialist: "mounted_specialist",
  siege_specialist: "siege_specialist",
  mayor: "mayor",
  wall_general: "wall_general",
  officer: "officer",
} as const;

export type GeneralEvaluationTypesEnum =
  (typeof generalEvaluationTypesEnum)[keyof typeof generalEvaluationTypesEnum];

export type GeneralEvaluationTypes = GeneralEvaluationTypesEnum;
