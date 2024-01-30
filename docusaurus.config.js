// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Thrive Documenation",
  tagline: "Explore our guides and examples to swiftly build scalable infrastructure and turbocharge your product launch—all on one dynamic platform.",
  url: "https://docs.thrivestack.ai",
  //baseUrl: "/docs/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Thrivestack-ai", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: '/',
          editUrl:
            'https://github.com/Thrivestack-ai/docs/tree/main/',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: "ThriveStack Logo",
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
            type: 'html',
            position: 'left',
            value: '<span>|</span>'
          },
          {
            type: 'docSidebar',
            sidebarId: 'devsSidebar',
            position: 'left',
            label: 'Developers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pmsSidebar',
            position: 'left',
            label: 'Growth',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gtmLeadersSidebar',
            position: 'left',
            label: 'GTM Leaders',
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'APIs',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'graphQLApiSidebar',
                label: 'GraphQL',
              },
              {
                type: 'docSidebar',
                sidebarId: 'openApiSidebar',
                label: 'REST',
              },
            ]
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/intro',
              },
              {
                label: 'For Developers',
                to: '/category/for-developers',
              },
              {
                label: 'For Product Managers',
                to: '/category/for-product-managers',
              },
              {
                label: 'For GTM Leaders',
                to: '/category/for-gtm-leaders',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          public_apis: {
            specPath: process.env.APP_ENV === 'production' ? 'https://saas-dev-docs-apis-bucket-wqcjov1l3x7su8tl.s3.ap-south-1.amazonaws.com/public_apis.yaml' : 'https://saas-dev-docs-apis-bucket-wqcjov1l3x7su8tl.s3.ap-south-1.amazonaws.com/public_apis.yaml',
            outputDir: "docs/public_apis",
            downloadUrl: process.env.APP_ENV === 'production' ? 'https://saas-dev-docs-apis-bucket-wqcjov1l3x7su8tl.s3.ap-south-1.amazonaws.com/public_apis.yaml' : 'https://saas-dev-docs-apis-bucket-wqcjov1l3x7su8tl.s3.ap-south-1.amazonaws.com/public_apis.yaml',
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
      },
    ],
    [
      "@graphql-markdown/docusaurus",
      {
        schema: "./schema.graphqls",
        rootPath: "./docs",
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader", // local file schema
        },
      }
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
