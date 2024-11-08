import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";
import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";
import { greenwoodPluginRendererLit } from "@greenwood/plugin-renderer-lit";

export default {
  activeContent: true,
  prerender: true,
  markdown: {
    settings: {
      commonmark: true,
    },
    plugins: ["remark-gfm", "rehype-slug", "rehype-autolink-headings"],
  },
  plugins: [
    greenwoodPluginTypeScript({
      extendConfig: true,
      servePage: "dynamic",
    }),

    greenwoodPluginRendererLit(),
  ],
};
