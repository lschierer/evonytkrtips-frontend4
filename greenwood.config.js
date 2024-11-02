import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";
import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";
import { greenwoodPluginImportCss } from "@greenwood/plugin-import-css";
import { greenwoodPluginRendererLit } from "@greenwood/plugin-renderer-lit";

export default {
  prerender: true,
  plugins: [
    greenwoodPluginTypeScript({
      extendConfig: true,
    }),
    greenwoodPluginPostCss(),
    greenwoodPluginImportCss({
      extendConfig: true,
    }),
    greenwoodPluginRendererLit(),
  ],
};
