import type {
  UuidForTypeAndNamePathParams,
  UuidForTypeAndName200,
  UuidForTypeAndName204,
  UuidForTypeAndName400,
  UuidForTypeAndName500,
  UuidForTypeAndNameQueryResponse,
} from "../types/UuidForTypeAndName.js";
import { generalEvaluationTypesSchema } from "./generalEvaluationTypesSchema.js";
import { z } from "zod";

export const uuidForTypeAndNamePathParamsSchema = z.object({
  extension: z
    .string()
    .regex(new RegExp("^(csv|json|html)$"))
    .max(5)
    .describe("the file extension that determines the response type\n"),
  type: z.lazy(() => generalEvaluationTypesSchema),
  name: z.string().max(100),
}) as z.ZodType<UuidForTypeAndNamePathParams>;

export type UuidForTypeAndNamePathParamsSchema = z.infer<
  typeof uuidForTypeAndNamePathParamsSchema
>;

/**
 * @description OK - Successful request with response body containing the UUID for the general
 */
export const uuidForTypeAndName200Schema =
  z.any() as z.ZodType<UuidForTypeAndName200>;

export type UuidForTypeAndName200Schema = z.infer<
  typeof uuidForTypeAndName200Schema
>;

/**
 * @description The request was successful, but there is no content to return in the response.
 */
export const uuidForTypeAndName204Schema =
  z.null() as z.ZodType<UuidForTypeAndName204>;

export type UuidForTypeAndName204Schema = z.infer<
  typeof uuidForTypeAndName204Schema
>;

/**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export const uuidForTypeAndName400Schema = z.object({
  errors: z
    .array(z.object({ message: z.string().max(1000) }))
    .max(10)
    .optional(),
  message: z.string().max(1000),
}) as z.ZodType<UuidForTypeAndName400>;

export type UuidForTypeAndName400Schema = z.infer<
  typeof uuidForTypeAndName400Schema
>;

/**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request. Report the issue to the support team if it persists.
 */
export const uuidForTypeAndName500Schema = z.object({
  message: z.string().max(1000),
}) as z.ZodType<UuidForTypeAndName500>;

export type UuidForTypeAndName500Schema = z.infer<
  typeof uuidForTypeAndName500Schema
>;

export const uuidForTypeAndNameQueryResponseSchema = z.union([
  z.lazy(() => uuidForTypeAndName200Schema),
  z.lazy(() => uuidForTypeAndName204Schema),
]) as z.ZodType<UuidForTypeAndNameQueryResponse>;

export type UuidForTypeAndNameQueryResponseSchema = z.infer<
  typeof uuidForTypeAndNameQueryResponseSchema
>;
