import type { GeneralEvaluationTypes } from "./GeneralEvaluationTypes.ts";

export type UuidForTypeAndNamePathParams = {
  /**
   * @description the file extension that determines the response type\n
   * @type string
   */
  extension: string;
  /**
   * @type string
   */
  type: GeneralEvaluationTypes;
  /**
   * @type string
   */
  name: string;
};

/**
 * @description OK - Successful request with response body containing the UUID for the general
 */
export type UuidForTypeAndName200 = any;

/**
 * @description The request was successful, but there is no content to return in the response.
 */
export type UuidForTypeAndName204 = null;

/**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export type UuidForTypeAndName400 = {
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
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request. Report the issue to the support team if it persists.
 */
export type UuidForTypeAndName500 = {
  /**
   * @type string
   */
  message: string;
};

export type UuidForTypeAndNameQueryResponse =
  | UuidForTypeAndName200
  | UuidForTypeAndName204;

export type UuidForTypeAndNameQuery = {
  Response: UuidForTypeAndName200 | UuidForTypeAndName204;
  PathParams: UuidForTypeAndNamePathParams;
  Errors: UuidForTypeAndName400 | UuidForTypeAndName500;
};
