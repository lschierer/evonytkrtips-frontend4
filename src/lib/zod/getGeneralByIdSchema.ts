import type { GetGeneralByIdPathParams, GetGeneralByIdQueryParams, GetGeneralById200, GetGeneralById400, GetGeneralById404, GetGeneralById500, GetGeneralByIdQueryResponse } from "../types/GetGeneralById.js";
import { ascendingLevelNamesSchema } from "./ascendingLevelNamesSchema.js";
import { generalSchema } from "./generalSchema.js";
import { specialityLevelNamesSchema } from "./specialityLevelNamesSchema.js";
import { z } from "zod";

 export const getGeneralByIdPathParamsSchema = z.object({ "extension": z.string().regex(new RegExp("^(csv|json|html)$")).max(5).describe("the file extension that determines the response type\n"), "id": z.string().uuid().max(100).describe("the name of the General\n") }) as z.ZodType<GetGeneralByIdPathParams>;

 export type GetGeneralByIdPathParamsSchema = z.infer<typeof getGeneralByIdPathParamsSchema>;

 export const getGeneralByIdQueryParamsSchema = z.object({ "verbose": z.boolean().describe("return verbose results").optional(), "level": z.number().int().min(1).max(45).describe("set the level of the general you want information about").optional(), "AscendingLevel": z.lazy(() => ascendingLevelNamesSchema).optional(), "SpecialityLevel": z.array(z.lazy(() => specialityLevelNamesSchema)).max(5).describe("Generals have speciality levels, when you ask for one, you may want that general with specialities at specific levels.").optional() }).optional() as z.ZodType<GetGeneralByIdQueryParams>;

 export type GetGeneralByIdQueryParamsSchema = z.infer<typeof getGeneralByIdQueryParamsSchema>;

 /**
 * @description OK - Successful request with response body
 */
export const getGeneralById200Schema = z.lazy(() => generalSchema) as z.ZodType<GetGeneralById200>;

 export type GetGeneralById200Schema = z.infer<typeof getGeneralById200Schema>;

 /**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export const getGeneralById400Schema = z.object({ "errors": z.array(z.object({ "message": z.string().max(1000) })).max(10).optional(), "message": z.string().max(1000) }) as z.ZodType<GetGeneralById400>;

 export type GetGeneralById400Schema = z.infer<typeof getGeneralById400Schema>;

 /**
 * @description The server cannot find the requested resource. The endpoint may be invalid or the resource may no longer exist.
 */
export const getGeneralById404Schema = z.object({ "message": z.string().max(1000) }) as z.ZodType<GetGeneralById404>;

 export type GetGeneralById404Schema = z.infer<typeof getGeneralById404Schema>;

 /**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request. Report the issue to the support team if it persists.
 */
export const getGeneralById500Schema = z.object({ "message": z.string().max(1000) }) as z.ZodType<GetGeneralById500>;

 export type GetGeneralById500Schema = z.infer<typeof getGeneralById500Schema>;

 export const getGeneralByIdQueryResponseSchema = z.lazy(() => getGeneralById200Schema) as z.ZodType<GetGeneralByIdQueryResponse>;

 export type GetGeneralByIdQueryResponseSchema = z.infer<typeof getGeneralByIdQueryResponseSchema>;