import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";
import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";
import { greenwoodPluginGoogleAnalytics } from "@greenwood/plugin-google-analytics";

export default {
  activeContent: true,
  isolation: true,
  prerender: true,
  staticRouter: false,
  markdown: {
    plugins: ["rehype-autolink-headings", "remark-gfm", "remark-rehype"],
    settings: {
      commonmark: true,
    },
  },
  optimization: "none",
  plugins: [
    greenwoodPluginTypeScript({
      extendConfig: true,
      servePage: "dynamic",
    }),
    greenwoodPluginPostCss({
      extendConfig: true,
    }),
    greenwoodPluginGoogleAnalytics({
      analyticsId: "G-98HFQWP71B",
    }),
  ],
};
