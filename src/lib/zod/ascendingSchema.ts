import type { Ascending } from "../types/Ascending.js";
import { ascendingLevelNamesSchema } from "./ascendingLevelNamesSchema.js";
import { ascendingLevelSchema } from "./ascendingLevelSchema.js";
import { z } from "zod";

 /**
 * @description The overall effeects of Ascending a General
 */
export const ascendingSchema = z.object({ "levels": z.array(z.lazy(() => ascendingLevelSchema)).max(15), "activeLevel": z.lazy(() => ascendingLevelNamesSchema).optional() }).describe("The overall effeects of Ascending a General") as z.ZodType<Ascending>;

 export type AscendingSchema = z.infer<typeof ascendingSchema>;