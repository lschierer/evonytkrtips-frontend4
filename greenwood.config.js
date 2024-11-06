import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";
import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";
import { greenwoodPluginRendererLit } from "@greenwood/plugin-renderer-lit";

export default {
  devServer: {
    extensions: ["css", "html", "md", "importmap", "json"],
  },
  activeContent: true,
  prerender: false,
  optimization: "none",
  polyfills: {
    importAttributes: ["css", "json", "importmap"],
  },
  markdown: {
    settings: { commonmark: true },
    plugins: ["remark-gfm", "rehype-slug", "rehype-autolink-headings"],
  },
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
