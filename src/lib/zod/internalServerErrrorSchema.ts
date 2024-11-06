import type { InternalServerErrror } from "../types/InternalServerErrror.js";
import { z } from "zod";

export const internalServerErrrorSchema = z.object({
  message: z.string().max(1000),
}) as z.ZodType<InternalServerErrror>;

export type InternalServerErrrorSchema = z.infer<
  typeof internalServerErrrorSchema
>;
