import type { BuffCondition } from "../types/BuffCondition.ts";
import { z } from "zod";

/**
 * @description Some Buffs apply only conditionally
 */
export const buffConditionSchema = z
  .enum([
    "Against_Monsters",
    "Attacking",
    "Defending",
    "During_SvS",
    "In_City",
    "In_Main_City",
    "Marching",
    "Reinforcing",
    "When_City_Mayor",
    "When_City_Mayor_for_This_SubCity",
    "When_Defending_Outside_the_Main_City",
    "When_Rallying",
    "When_the_Main_Defense_General",
    "When_an_Officer",
    "Brings_a_Dragon",
    "Brings_a_Dragon_to_the_Attack",
    "Brings_a_Dragon_or_Spirital_Beast",
    "Brings_a_Dragon_or_Spritial_Beast_to_the_Attack",
    "Leading_the_Army_to_Attack",
  ])
  .describe("Some Buffs apply only conditionally") as z.ZodType<BuffCondition>;

export type BuffConditionSchema = z.infer<typeof buffConditionSchema>;
