import type { Buff } from "./Buff.ts";

/**
 * @description Standard Books that can be added to a General
 */
export type StandardBook = {
  /**
   * @type string, uuid
   */
  id: string;
  /**
   * @type string
   */
  name: string;
  /**
   * @type array
   */
  buffs: Buff[];
  /**
   * @type integer, int32
   */
  level: number;
};
