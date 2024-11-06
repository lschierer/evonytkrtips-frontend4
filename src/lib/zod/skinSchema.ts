import type { Skin } from "../types/Skin.js";
import { buffSchema } from "./buffSchema.js";
import { z } from "zod";

/**
 * @description Some generals have Skins or alternate outfits that add buffs
 */
export const skinSchema = z
  .object({
    name: z.string().max(1000),
    activeBuffs: z
      .array(z.lazy(() => buffSchema))
      .max(10)
      .optional(),
    passiveBuffs: z
      .array(z.lazy(() => buffSchema))
      .max(10)
      .optional(),
  })
  .describe(
    "Some generals have Skins or alternate outfits that add buffs"
  ) as z.ZodType<Skin>;

export type SkinSchema = z.infer<typeof skinSchema>;
