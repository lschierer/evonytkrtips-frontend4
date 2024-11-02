import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";
import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";
import { greenwoodPluginImportCss } from "@greenwood/plugin-import-css";

export default {
  prerender: false,
  plugins: [
    greenwoodPluginTypeScript(),
    greenwoodPluginPostCss({
      extendConfig: true,
    }),
    greenwoodPluginImportCss(),
  ],
};
