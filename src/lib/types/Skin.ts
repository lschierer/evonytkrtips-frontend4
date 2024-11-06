import type { Buff } from "./Buff.js";

/**
 * @description Some generals have Skins or alternate outfits that add buffs
 */
export type Skin = {
  /**
   * @type string
   */
  name: string;
  /**
   * @type array | undefined
   */
  activeBuffs?: Buff[];
  /**
   * @type array | undefined
   */
  passiveBuffs?: Buff[];
};
