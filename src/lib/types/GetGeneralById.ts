import type { AscendingLevelNames } from "./AscendingLevelNames.ts";
import type { General } from "./General.ts";
import type { SpecialityLevelNames } from "./SpecialityLevelNames.ts";

export type GetGeneralByIdPathParams = {
  /**
   * @description the file extension that determines the response type\n
   * @type string
   */
  extension: string;
  /**
   * @description the name of the General\n
   * @type string, uuid
   */
  id: string;
};

export type GetGeneralByIdQueryParams = {
  /**
   * @description return verbose results
   * @type boolean | undefined
   */
  verbose?: boolean;
  /**
   * @description set the level of the general you want information about
   * @type integer | undefined, int32
   */
  level?: number;
  AscendingLevel?: AscendingLevelNames;
  /**
   * @description Generals have speciality levels, when you ask for one, you may want that general with specialities at specific levels.
   * @type array | undefined
   */
  SpecialityLevel?: SpecialityLevelNames[];
};

/**
 * @description OK - Successful request with response body
 */
export type GetGeneralById200 = General;

/**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export type GetGeneralById400 = {
  /**
   * @type array | undefined
   */
  errors?: {
    /**
     * @type string
     */
    message: string;
  }[];
  /**
   * @type string
   */
  message: string;
};

/**
 * @description The server cannot find the requested resource. The endpoint may be invalid or the resource may no longer exist.
 */
export type GetGeneralById404 = {
  /**
   * @type string
   */
  message: string;
};

/**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request. Report the issue to the support team if it persists.
 */
export type GetGeneralById500 = {
  /**
   * @type string
   */
  message: string;
};

export type GetGeneralByIdQueryResponse = GetGeneralById200;

export type GetGeneralByIdQuery = {
  Response: GetGeneralById200;
  PathParams: GetGeneralByIdPathParams;
  QueryParams: GetGeneralByIdQueryParams;
  Errors: GetGeneralById400 | GetGeneralById404 | GetGeneralById500;
};
