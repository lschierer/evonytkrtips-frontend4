import type { NotFound } from "../types/NotFound.js";
import { z } from "zod";

 export const notFoundSchema = z.object({ "message": z.string().max(1000) }) as z.ZodType<NotFound>;

 export type NotFoundSchema = z.infer<typeof notFoundSchema>;