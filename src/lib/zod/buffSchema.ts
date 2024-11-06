import type { Buff } from "../types/Buff.js";
import { buffAttributesSchema } from "./buffAttributesSchema.js";
import { conditionSchema } from "./conditionSchema.js";
import { targetedTypesSchema } from "./targetedTypesSchema.js";
import { z } from "zod";

 export const buffSchema = z.object({ "value": z.object({ "unit": z.enum(["flat", "percentage"]).default("percentage"), "number": z.number().min(0) }), "passive": z.boolean().default(false), "attribute": z.union([z.lazy(() => buffAttributesSchema), z.array(z.lazy(() => buffAttributesSchema)).max(10)]), "conditions": z.union([z.lazy(() => conditionSchema), z.array(z.lazy(() => conditionSchema)).max(10)]).optional(), "targetedTypes": z.union([z.lazy(() => targetedTypesSchema), z.array(z.lazy(() => targetedTypesSchema)).max(5)]).optional() }) as z.ZodType<Buff>;

 export type BuffSchema = z.infer<typeof buffSchema>;