import type { BuffCondition } from "./BuffCondition.js";
import type { DebuffConditions } from "./DebuffConditions.js";

 /**
 * @description A condition is essentially an adverb for a Buff object.
*/
export type Condition = ((BuffCondition | DebuffConditions) | (BuffCondition | DebuffConditions)[]);