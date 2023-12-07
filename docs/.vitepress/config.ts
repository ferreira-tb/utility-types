import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/utility-types/',
  title: 'Utility Types',
  description: 'Utility types for Typescript',
  lang: 'en',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      {
        text: 'typedoc',
        link: 'https://tb.dev.br/utility-types/typedoc/index.html'
      }
    ],

    editLink: {
      pattern: 'https://github.com/ferreira-tb/utility-types/edit/main/docs/:path'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ferreira-tb/utility-types'
      }
    ],

    footer: {
      copyright:
        'Copyright © 2023 <a href="https://github.com/ferreira-tb">Andrew Ferreira</a>'
    }
  }
});
