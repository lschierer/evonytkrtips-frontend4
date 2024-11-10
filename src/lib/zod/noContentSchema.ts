import type { NoContent } from "../types/NoContent.ts";
import { z } from "zod";

export const noContentSchema = z.null() as z.ZodType<NoContent>;

export type NoContentSchema = z.infer<typeof noContentSchema>;
