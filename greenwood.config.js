import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";
import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";

export default {
  devServer: {
    extensions: ["css", "ts", "js"],
  },
  optimization: "none",
  isolation: true,
  activeContent: true,
  prerender: true,
  plugins: [
    greenwoodPluginTypeScript({
      extendConfig: true,
      servePage: "dynamic",
    }),
    greenwoodPluginPostCss({
      extendConfig: true,
    }),
  ],
};
