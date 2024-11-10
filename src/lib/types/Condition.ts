import type { BuffCondition } from "./BuffCondition.ts";
import type { DebuffConditions } from "./DebuffConditions.ts";

/**
 * @description A condition is essentially an adverb for a Buff object.
 */
export type Condition =
  | (BuffCondition | DebuffConditions)
  | (BuffCondition | DebuffConditions)[];
