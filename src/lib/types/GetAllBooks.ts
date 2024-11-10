import type { BuiltinBookListObject } from "./BuiltinBookListObject.ts";
import type { StandardBookListItem } from "./StandardBookListItem.ts";

export type GetAllBooksPathParams = {
  /**
   * @description the file extension that determines the response type\n
   * @type string
   */
  extension: string;
};

/**
 * @description OK - Successful request with response body
 */
export type GetAllBooks200 = {
  /**
   * @type array
   */
  data: (BuiltinBookListObject | StandardBookListItem)[];
};

/**
 * @description The request was successful, but there is no content to return in the response.
 */
export type GetAllBooks204 = null;

/**
 * @description The server could not understand the request due to invalid syntax. The client should modify the request and try again.
 */
export type GetAllBooks400 = {
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
export type GetAllBooks500 = {
  /**
   * @type string
   */
  message: string;
};

export type GetAllBooksQueryResponse = GetAllBooks200 | GetAllBooks204;

export type GetAllBooksQuery = {
  Response: GetAllBooks200 | GetAllBooks204;
  PathParams: GetAllBooksPathParams;
  Errors: GetAllBooks400 | GetAllBooks500;
};
