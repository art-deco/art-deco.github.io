/** @type {import('splendid').Config} */
const config = {
  layout: 'splendid/layout/main.html',
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[art-deco](https://art-deco.github.io)',
    },
  ],
  // output: 'docs',
  // appDir: 'splendid',

  // to generate sitemaps, use either folder or domain website.
  url: 'https://art-deco.github.io',
  // url: 'https://splendid.page',
}

export default config