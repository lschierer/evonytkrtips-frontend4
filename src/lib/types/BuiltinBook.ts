import type { Buff } from "./Buff.ts";

/**
 * @description A General\'s Builtin Book
 */
export type BuiltinBook = {
  /**
   * @type string, uuid
   */
  id: string;
  /**
   * @type string
   */
  name: string;
  /**
   * @type string
   */
  text: string;
  /**
   * @type array | undefined
   */
  buffs?: Buff[];
};
