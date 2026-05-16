import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://cele.dev',
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: 'prism',
  },
});
