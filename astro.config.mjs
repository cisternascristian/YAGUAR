import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import simpleStackForm from "simple-stack-form";
import keystatic from '@keystatic/astro'
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: "https://yaguar.net",
  integrations: [mdx({
    extendMarkdownConfig: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
    gfm: true,
  }), icon(), sitemap(), react(), tailwind({
    applyBaseStyles: false,
  }), simpleStackForm(), markdoc({
    allowHTML: true,
  }    
  ), keystatic()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
    analytics: true,
  }),
});