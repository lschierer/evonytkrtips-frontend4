import type { StandardBookListItem } from "../types/StandardBookListItem.js";
import { z } from "zod";

 /**
 * @description list item version of the StandardBook
 */
export const standardBookListItemSchema = z.object({ "id": z.string().uuid().max(100).optional(), "name": z.string().max(100), "level": z.number().int().min(1).max(4) }).describe("list item version of the StandardBook") as z.ZodType<StandardBookListItem>;

 export type StandardBookListItemSchema = z.infer<typeof standardBookListItemSchema>;