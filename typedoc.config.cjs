/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ['./src/index.ts'],
  out: 'docs/.vitepress/dist/typedoc',
  includeVersion: true,
  githubPages: false,
  titleLink: 'https://tb.dev.br/utility-types/'
};
