import type { GeneralListItem } from "../types/GeneralListItem.ts";
import { z } from "zod";

export const generalListItemSchema = z.object({
  id: z.string().uuid().max(100).optional(),
  name: z.string().max(1000),
}) as z.ZodType<GeneralListItem>;

export type GeneralListItemSchema = z.infer<typeof generalListItemSchema>;
