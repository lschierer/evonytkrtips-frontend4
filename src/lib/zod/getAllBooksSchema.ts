import type {
  GetAllBooksPathParams,
  GetAllBooks200,
  GetAllBooks204,
  GetAllBooks400,
  GetAllBooks500,
  GetAllBooksQueryResponse,
} from "../types/GetAllBooks.js";
import { builtinBookListObjectSchema } from "./builtinBookListObjectSchema.js";
import { standardBookListItemSchema } from "./standardBookListItemSchema.js";
import { z } from "zod";

export const getAllBooksPathParamsSchema = z.object({
  extension: z
    .string()
    .regex(new RegExp("^(csv|json|html)$"))
    .max(5)
    .describe("the file extension that determines the response type\n"),
}) as z.ZodType<GetAllBooksPathParams>;

export type GetAllBooksPathParamsSchema = z.infer<
  typeof getAllBooksPathParamsSchema
>;

/**
 * @description OK - Successful request with response body
 */
export const getAllBooks200Schema = z.object({
  data: z
    .array(
      z.union([
        z.lazy(() => builtinBookListObjectSchema),
        z.lazy(() => standardBookListItemSchema),
      ])
    )
    .max(1000),
}) as z.ZodType<GetAllBooks200>;

export type GetAllBooks200Schema = z.infer<typeof getAllBooks200Schema>;

/**
 * @description The request was successful, but there is no content to return in the response.
 */
export const getAllBooks204Schema = z.null() as z.ZodType<GetAllBooks204>;

export type GetAllBooks204Schema = z.infer<typeof getAllBooks204Schema>;

/**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export const getAllBooks400Schema = z.object({
  errors: z
    .array(z.object({ message: z.string().max(1000) }))
    .max(10)
    .optional(),
  message: z.string().max(1000),
}) as z.ZodType<GetAllBooks400>;

export type GetAllBooks400Schema = z.infer<typeof getAllBooks400Schema>;

/**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request. Report the issue to the support team if it persists.
 */
export const getAllBooks500Schema = z.object({
  message: z.string().max(1000),
}) as z.ZodType<GetAllBooks500>;

export type GetAllBooks500Schema = z.infer<typeof getAllBooks500Schema>;

export const getAllBooksQueryResponseSchema = z.union([
  z.lazy(() => getAllBooks200Schema),
  z.lazy(() => getAllBooks204Schema),
]) as z.ZodType<GetAllBooksQueryResponse>;

export type GetAllBooksQueryResponseSchema = z.infer<
  typeof getAllBooksQueryResponseSchema
>;
