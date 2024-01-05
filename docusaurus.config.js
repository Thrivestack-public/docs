import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Thrive Documentation',
  tagline: 'Explore our guides and examples to swiftly build scalable infrastructure and turbocharge your product launch—all on one dynamic platform.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.thrivestack.ai',
  baseUrl: '/docs/',

  organizationName: 'Thrivestack-ai',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [["@easyops-cn/docusaurus-search-local", ({
      hashed: true,
      docsRouteBasePath: "/",
      indexBlog: false,
    })
  ]],

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/Thrivestack-ai/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        logo: {
          alt: 'ThriveStack Logo',
          src: 'img/logo-purple.png',
          srcDark: 'img/logo-white.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'getStartedSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devsSidebar',
            position: 'left',
            label: 'For Developers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pmsSidebar',
            position: 'left',
            label: 'For Product Managers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gtmLeadersSidebar',
            position: 'left',
            label: 'For GTM Leaders',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/intro',
              },
              {
                label: 'For Developers',
                to: '/devs/intro',
              },
              {
                label: 'For Product Managers',
                to: '/pms/intro',
              },
              {
                label: 'For GTM Leaders',
                to: '/gtm-leaders/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Substack',
                href: 'https://substack.com/@thrivestack',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Thrivestack-ai/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
