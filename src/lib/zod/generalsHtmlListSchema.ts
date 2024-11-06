import type {
  GeneralsHtmlListPathParams,
  GeneralsHtmlList200,
  GeneralsHtmlList204,
  GeneralsHtmlList400,
  GeneralsHtmlList500,
  GeneralsHtmlListQueryResponse,
} from "../types/GeneralsHtmlList.js";
import { generalListSchema } from "./generalListSchema.js";
import { z } from "zod";

export const generalsHtmlListPathParamsSchema = z.object({
  extension: z
    .string()
    .regex(new RegExp("^(csv|json|html)$"))
    .max(5)
    .describe("the file extension that determines the response type\n"),
}) as z.ZodType<GeneralsHtmlListPathParams>;

export type GeneralsHtmlListPathParamsSchema = z.infer<
  typeof generalsHtmlListPathParamsSchema
>;

/**
 * @description OK - Successful request with response body
 */
export const generalsHtmlList200Schema = z
  .array(z.lazy(() => generalListSchema))
  .min(4)
  .max(10) as z.ZodType<GeneralsHtmlList200>;

export type GeneralsHtmlList200Schema = z.infer<
  typeof generalsHtmlList200Schema
>;

/**
 * @description The request was successful, but there is no content to return in the response.
 */
export const generalsHtmlList204Schema =
  z.null() as z.ZodType<GeneralsHtmlList204>;

export type GeneralsHtmlList204Schema = z.infer<
  typeof generalsHtmlList204Schema
>;

/**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export const generalsHtmlList400Schema = z.object({
  errors: z
    .array(z.object({ message: z.string().max(1000) }))
    .max(10)
    .optional(),
  message: z.string().max(1000),
}) as z.ZodType<GeneralsHtmlList400>;

export type GeneralsHtmlList400Schema = z.infer<
  typeof generalsHtmlList400Schema
>;

/**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request. Report the issue to the support team if it persists.
 */
export const generalsHtmlList500Schema = z.object({
  message: z.string().max(1000),
}) as z.ZodType<GeneralsHtmlList500>;

export type GeneralsHtmlList500Schema = z.infer<
  typeof generalsHtmlList500Schema
>;

export const generalsHtmlListQueryResponseSchema = z.union([
  z.lazy(() => generalsHtmlList200Schema),
  z.lazy(() => generalsHtmlList204Schema),
]) as z.ZodType<GeneralsHtmlListQueryResponse>;

export type GeneralsHtmlListQueryResponseSchema = z.infer<
  typeof generalsHtmlListQueryResponseSchema
>;
