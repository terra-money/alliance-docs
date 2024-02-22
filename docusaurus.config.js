// @ts-check
const lightCodeTheme = require('./light.theme.js');
const darkCodeTheme = require('./dark.theme.js');
const theme = require('shiki/themes/material-default.json');
const { remarkCodeHike } = require('@code-hike/mdx');
/** @type {import('@docusaurus/types').Config} */
module.exports = async function config() {
  const math = (await import('remark-math')).default;
  const katex = (await import('rehype-katex')).default;
  return {
    title: 'Alliance Docs',
    tagline: 'The official docs for Alliance',
    url: 'https://docs.alliance.money',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'terra-money', // Usually your GitHub org/user name.
    projectName: 'alliance-docs', // Usually your repo name.
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
    plugins: [
      'docusaurus-plugin-sass', 
    [
      require.resolve("@gabrielcsapo/docusaurus-plugin-matomo"),
      {
        siteId: "2",
        matomoUrl: "https://terradocs.matomo.cloud/",
        siteUrl: "https://alliance.money",
      },
    ],
  ],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            beforeDefaultRemarkPlugins: [
              [
                remarkCodeHike,
                {
                  theme,
                  lineNumbers: true,
                  showCopyButton: true,
                  staticMediaQuery: 'not screen, (max-width: 768px)',
                },
              ],
              math,
            ],
            rehypePlugins: [katex],
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: '/', // Serve the docs at the site's root
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/terra-money/alliance',
          },
          blog: false,
          theme: {
            customCss: [
              require.resolve('@code-hike/mdx/styles.css'),
              require.resolve('./src/styles/main.scss'),
              require.resolve('katex/dist/katex.min.css'),
            ],
          },
          gtag: {
            trackingID: 'G-WCFM741H3Z',
            anonymizeIP: true,
          },
        }),
      ],
    ],
    themes: ['mdx-v2'],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/logo.png',
        docs: {
          sidebar: {
            hideable: false,
            autoCollapseCategories: false,
          },
        },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 4,
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        navbar: {
          title: '🤝 Alliance Docs',
          //logo: {
          //alt: "Enterprise Docs",
          //src: "img/logo_light.svg",
          //srcDark: "img/logo_dark.svg",
          //},
          items: [
            {
              href: 'https://terra.money/', //front-end URL
              position: 'right',
              label: 'terra.money',
              className: 'header-terra-link',
              'aria-label': 'Terra Money',
            },
            {
              href: 'https://github.com/terra-money/alliance',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },
        footer: {},
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
  };
};
