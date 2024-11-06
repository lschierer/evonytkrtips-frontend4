import type { Condition } from "../types/Condition.js";
import { buffConditionSchema } from "./buffConditionSchema.js";
import { debuffConditionsSchema } from "./debuffConditionsSchema.js";
import { z } from "zod";

 /**
 * @description A condition is essentially an adverb for a Buff object.
 */
export const conditionSchema = z.union([z.union([z.lazy(() => buffConditionSchema), z.lazy(() => debuffConditionsSchema)]), z.array(z.union([z.lazy(() => buffConditionSchema), z.lazy(() => debuffConditionsSchema)])).max(10)]).describe("A condition is essentially an adverb for a Buff object. ") as z.ZodType<Condition>;

 export type ConditionSchema = z.infer<typeof conditionSchema>;