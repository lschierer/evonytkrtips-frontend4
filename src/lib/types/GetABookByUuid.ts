import type { BuiltinBook } from "./BuiltinBook.js";
import type { StandardBook } from "./StandardBook.js";

export type GetABookByUuidPathParams = {
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

/**
 * @description OK - Successful request with response body
 */
export type GetABookByUuid200 = BuiltinBook | StandardBook;

/**
 * @description The request was successful, but there is no content to return in the response.
 */
export type GetABookByUuid204 = null;

/**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export type GetABookByUuid400 = {
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
export type GetABookByUuid404 = {
  /**
   * @type string
   */
  message: string;
};

/**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request. Report the issue to the support team if it persists.
 */
export type GetABookByUuid500 = {
  /**
   * @type string
   */
  message: string;
};

export type GetABookByUuidQueryResponse = GetABookByUuid200 | GetABookByUuid204;

export type GetABookByUuidQuery = {
  Response: GetABookByUuid200 | GetABookByUuid204;
  PathParams: GetABookByUuidPathParams;
  Errors: GetABookByUuid400 | GetABookByUuid404 | GetABookByUuid500;
};
