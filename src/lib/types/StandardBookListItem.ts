/**
 * @description list item version of the StandardBook
 */
export type StandardBookListItem = {
  /**
   * @type string | undefined, uuid
   */
  id?: string;
  /**
   * @type string
   */
  name: string;
  /**
   * @type integer, int32
   */
  level: number;
};
