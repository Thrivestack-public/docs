/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */


const dev = [
    {
      type: 'category', 
      label: 'Developers',
      link: {
        type: 'generated-index',
        title: "Documentation for Developers",
        description: "Documentation for Developers",
        keywords: ["devs"],
      },
      items: [
        {
          type: 'category', 
          label: 'Customize',
          items: [
            'devs/configure/intro',
          ]
        },
        {
          type: 'category', 
          label: 'Integrate',
          items: [
            'devs/integrate/intro',
          ]
        },
        {
          type: 'category', 
          label: 'Go Live',
          items: [
            'devs/go-live/intro',
          ]
        },
      ]
    }
  ]

const pms = [
    {
      type: 'category', 
      label: 'Growth',
      link: {
        type: 'generated-index',
        title: "Documentation for Growth Leaders",
        description: "Documentation for Growth Leaders",
        keywords: ["pms"],
      },
      items: [
        {
          type: 'category', 
          label: 'Customize',
          items: [
            'pms/configure/intro',
          ]
        },
        {
          type: 'category', 
          label: 'Integrate',
          items: [
            'pms/integrate/intro',
          ]
        },
        {
          type: 'category', 
          label: 'Go Live',
          items: [
            'pms/go-live/intro',
          ]
        },
      ]
    }
  ]

const gtm = [
    {
      type: 'category', 
      label: 'GTM Leaders',
      link: {
        type: 'generated-index',
        title: "Documentation for GTM Leaders",
        description: "Documentation for GTM Leaders",
        keywords: ["gtm"],
      },
      items: [
        {
          type: 'category', 
          label: 'Customize',
          items: [
            'gtm-leaders/configure/intro',
          ]
        },
        {
          type: 'category', 
          label: 'Integrate',
          items: [
            'gtm-leaders/integrate/intro',
          ]
        },
        {
          type: 'category', 
          label: 'Go Live',
          items: [
            'gtm-leaders/go-live/intro',
          ]
        },
      ]
    }
  ]

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  getStartedSidebar: [
    {
      type: 'category', 
      label: 'Getting Started',
      items: [
        'getting-started/intro',
        {
          type: 'category', 
          label: 'Personas',
          link: {
            type: 'generated-index',
            title: 'Personas',
            description: "Persona Level Documentation",
            keywords: ["personas"],
          },
          items: [...dev, ...pms, ...gtm],
        },
        {
          type: 'category', 
          label: '🛎️ SELF SERVE',
          link: {
            type: 'generated-index',
            title: 'Self Serve',
            description: "Self Serve Documentation",
            keywords: ["self-serve"],
          },
          items: [
            'getting-started/self-serve/self-serve',
            'getting-started/self-serve/workflow-canvas',
            'getting-started/self-serve/triggers',
            'getting-started/self-serve/invitation',
            'getting-started/self-serve/onboarding',
            'getting-started/self-serve/publish',
            'getting-started/self-serve/promote',
          ]
        },
        {
          type: 'category', 
          label: '📈 ANALYZE',
          link: {
            type: 'generated-index',
            title: 'Analyze',
            description: "Get started with ThriveStack's Analyze Module",
            keywords: ['analyze'],
          },
          items: [
          {
            type: 'category', 
            label: 'Instrumentation',
            link: {
              type: 'generated-index',
              title: "Instrumentation",
              description: "Get started with ThriveStack's Instrumentation Module",
              keywords: ["instrumentation"],
            },
            items: [
              {
                type: 'category', 
                label: 'Identification',
                link: {
                  type: 'generated-index',
                  title: 'Identification',
                  description: 'Identification Docs',
                  keywords: ['identification'],
                },
                items: [
                  'getting-started/analyze/instrumentation/identification/overview',
                  'getting-started/analyze/instrumentation/identification/user',
                  'getting-started/analyze/instrumentation/identification/group',
                ]
              },
              {
                type: 'category', 
                label: 'Events',
                items: [
                'getting-started/analyze/instrumentation/events/standard/overview',
                {
                  type: 'category', 
                  label: 'Standard',
                  link: {
                    type: 'generated-index',
                    title: 'Standard',
                    description: 'Standard Docs',
                    keywords: ['standard-events'],
                  },
                  items: [
                    'getting-started/analyze/instrumentation/events/standard/signed_up',
                    'getting-started/analyze/instrumentation/events/standard/account_created',
                    'getting-started/analyze/instrumentation/events/standard/account_added_user',
                    'getting-started/analyze/instrumentation/events/standard/signed_in',
                    'getting-started/analyze/instrumentation/events/standard/signed_out',
                    'getting-started/analyze/instrumentation/events/standard/invite_sent',
                    'getting-started/analyze/instrumentation/events/standard/trial_started',
                    'getting-started/analyze/instrumentation/events/standard/trial_ended',
                    'getting-started/analyze/instrumentation/events/standard/account_removed_user',
                    'getting-started/analyze/instrumentation/events/standard/account_deleted',
                  ]
                },
                ]
              },
            ]
          },
            {
              type: 'category', 
              label: 'Reports',
              items: [
                'getting-started/analyze/reports/overview'
              ]
            },
          ]
        },
      ]
    }
  ],
  devsSidebar: dev,
  pmsSidebar: pms,
  gtmLeadersSidebar: gtm,
  openApiSidebar: [
    {
      type: "category",
      label: "Thrive APIs",
      link: {
        type: "generated-index",
        title: "Instrumentation API",
        description:
          "Documentation for Instrumentation API",
      },
      // @ts-ignore
      items: require("./docs/public_apis/sidebar.js")
    }
  ],
  graphQLApiSidebar: [{type: 'autogenerated', dirName: 'schema'}]
};

module.exports = sidebars;
