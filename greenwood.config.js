import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";
import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";
import { greenwoodPluginRendererLit } from "@greenwood/plugin-renderer-lit";
import { greenwoodPluginImportRaw } from "@greenwood/plugin-import-raw";

export default {
  devServer: {
    extensions: ["css", "ts", "js"],
  },
  optimization: "none",
  isolation: true,
  activeContent: true,
  prerender: false,
  plugins: [
    greenwoodPluginTypeScript({
      extendConfig: true,
      servePage: "dynamic",
    }),
    greenwoodPluginPostCss({
      extendConfig: true,
    }),
    greenwoodPluginRendererLit(),
  ],
};
