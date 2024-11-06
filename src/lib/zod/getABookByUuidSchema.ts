import type { GetABookByUuidPathParams, GetABookByUuid200, GetABookByUuid204, GetABookByUuid400, GetABookByUuid404, GetABookByUuid500, GetABookByUuidQueryResponse } from "../types/GetABookByUuid.js";
import { builtinBookSchema } from "./builtinBookSchema.js";
import { standardBookSchema } from "./standardBookSchema.js";
import { z } from "zod";

 export const getABookByUuidPathParamsSchema = z.object({ "extension": z.string().regex(new RegExp("^(csv|json|html)$")).max(5).describe("the file extension that determines the response type\n"), "id": z.string().uuid().max(100).describe("the name of the General\n") }) as z.ZodType<GetABookByUuidPathParams>;

 export type GetABookByUuidPathParamsSchema = z.infer<typeof getABookByUuidPathParamsSchema>;

 /**
 * @description OK - Successful request with response body
 */
export const getABookByUuid200Schema = z.union([z.lazy(() => builtinBookSchema), z.lazy(() => standardBookSchema)]) as z.ZodType<GetABookByUuid200>;

 export type GetABookByUuid200Schema = z.infer<typeof getABookByUuid200Schema>;

 /**
 * @description The request was successful, but there is no content to return in the response.
 */
export const getABookByUuid204Schema = z.null() as z.ZodType<GetABookByUuid204>;

 export type GetABookByUuid204Schema = z.infer<typeof getABookByUuid204Schema>;

 /**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export const getABookByUuid400Schema = z.object({ "errors": z.array(z.object({ "message": z.string().max(1000) })).max(10).optional(), "message": z.string().max(1000) }) as z.ZodType<GetABookByUuid400>;

 export type GetABookByUuid400Schema = z.infer<typeof getABookByUuid400Schema>;

 /**
 * @description The server cannot find the requested resource. The endpoint may be invalid or the resource may no longer exist.
 */
export const getABookByUuid404Schema = z.object({ "message": z.string().max(1000) }) as z.ZodType<GetABookByUuid404>;

 export type GetABookByUuid404Schema = z.infer<typeof getABookByUuid404Schema>;

 /**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request. Report the issue to the support team if it persists.
 */
export const getABookByUuid500Schema = z.object({ "message": z.string().max(1000) }) as z.ZodType<GetABookByUuid500>;

 export type GetABookByUuid500Schema = z.infer<typeof getABookByUuid500Schema>;

 export const getABookByUuidQueryResponseSchema = z.union([z.lazy(() => getABookByUuid200Schema), z.lazy(() => getABookByUuid204Schema)]) as z.ZodType<GetABookByUuidQueryResponse>;

 export type GetABookByUuidQueryResponseSchema = z.infer<typeof getABookByUuidQueryResponseSchema>;