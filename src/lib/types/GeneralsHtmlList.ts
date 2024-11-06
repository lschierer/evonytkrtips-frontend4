import type { GeneralList } from "./GeneralList.js";

export type GeneralsHtmlListPathParams = {
  /**
   * @description the file extension that determines the response type\n
   * @type string
   */
  extension: string;
};

/**
 * @description OK - Successful request with response body
 */
export type GeneralsHtmlList200 = GeneralList[];

/**
 * @description The request was successful, but there is no content to return in the response.
 */
export type GeneralsHtmlList204 = null;

/**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export type GeneralsHtmlList400 = {
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
export type GeneralsHtmlList500 = {
  /**
   * @type string
   */
  message: string;
};

export type GeneralsHtmlListQueryResponse =
  | GeneralsHtmlList200
  | GeneralsHtmlList204;

export type GeneralsHtmlListQuery = {
  Response: GeneralsHtmlList200 | GeneralsHtmlList204;
  PathParams: GeneralsHtmlListPathParams;
  Errors: GeneralsHtmlList400 | GeneralsHtmlList500;
};
