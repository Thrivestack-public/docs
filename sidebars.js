/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const build = [
{
          type: 'category', 
          label: 'In-App Features',
          items: [
            {
              type: 'category',
              label: 'Invitation',
              items: [
                "getting-started/in-app-features/invitation"
              ]
            }
          ]
        },
{
          type: 'category', 
          label: 'Self Serve',
          //link: {
          //  type: 'generated-index',
          //  title: 'Self Serve',
          //  description: "Self Serve Documentation",
          //  keywords: ["self-serve"],
          //},
          items: [
            'getting-started/self-serve/overview',
            'getting-started/self-serve/start-here',
            {
              type: 'category',
              label: 'Customize',
              items: [
                'getting-started/self-serve/customize/http_trigger',
                'getting-started/self-serve/customize/authentication',
                'getting-started/self-serve/customize/enrichment',
                'getting-started/self-serve/customize/waitlist',
                'getting-started/self-serve/customize/onboarding',
                'getting-started/self-serve/customize/store_leads',
                'getting-started/self-serve/customize/pricing',
                'getting-started/self-serve/customize/create_tenant',
                'getting-started/self-serve/customize/notification',
                'getting-started/self-serve/customize/redirection',
              ],
            },
            {
              type: 'category',
              label: 'Integrate',
              items: [
                //'getting-started/self-serve/integrate/placeholder',
                'getting-started/self-serve/integrate/integrate',
                'getting-started/self-serve/integrate/sample-app',
              ]
            },
            {
              type: 'category',
              label: 'Go Live',
              items: [
                'getting-started/self-serve/go-live/placeholder',
              ]
            },
            {
              type: 'category',
              label: 'APIs',
              items: [
                'getting-started/self-serve/apis/intro',
                'getting-started/self-serve/apis/triggers',
                'getting-started/self-serve/apis/invitation',
                'getting-started/self-serve/apis/onboarding',
                'getting-started/self-serve/apis/publish',
                'getting-started/self-serve/apis/promote',
              ]
            },
            //'getting-started/self-serve/self-serve',
            //'getting-started/self-serve/workflow-canvas',
            {
              type: 'category',
              label: 'Features',
              items: [
                "getting-started/self-serve/features/no_code_orchestration"
              ]
            }
          ]
        }
]
const analyze = [
{
          type: 'category', 
          label: 'Analyze',
          //link: {
          //  type: 'generated-index',
          //  title: 'Analyze',
          //  description: "Get started with ThriveStack's Analyze Module",
          //  keywords: ['analyze'],
          //},
          items: [
          //"getting-started/analyze/intro", // Delete this, this is empty
          'getting-started/analyze/instrumentation/overview',
          {
              type: 'category',
              label: 'APIs',
              items: [
                "getting-started/analyze/authentication",
                'getting-started/analyze/instrumentation/identification/user',
                'getting-started/analyze/instrumentation/identification/group',
                'getting-started/analyze/instrumentation/events/event-tracking',
                'getting-started/analyze/instrumentation/page',
              ],
          },
          {
            type: 'category', 
            label: 'Events',
            items: [
            'getting-started/analyze/instrumentation/events/standard/events_overview',
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
            'getting-started/analyze/instrumentation/events/standard/user_waitlisted',
            'getting-started/analyze/instrumentation/events/standard/user_enriched',
            'getting-started/analyze/instrumentation/events/standard/tenant_waitlisted',
            'getting-started/analyze/instrumentation/events/standard/group_enriched',
            'getting-started/analyze/instrumentation/events/standard/custom_events',
            {
              type: 'category', 
              label: 'Custom',
              link: {
                type: 'generated-index',
                title: 'Custom',
                description: 'Custom Docs',
                keywords: ['custom-events'],
              },
              items: [
              ]
            },
            ]
          },

            {
              type: 'category', 
              label: 'Reports',
              items: [
                'getting-started/analyze/reports/overview',
                'getting-started/analyze/reports/standard/acquisition',
                //'getting-started/analyze/reports/standard/activation',
                //'getting-started/analyze/reports/standard/retention',
                //'getting-started/analyze/reports/standard/engagement',
                //'getting-started/analyze/reports/standard/expansion',
                {
                  type: 'category', 
                  label: 'Custom',
                  link: {
                    type: 'generated-index',
                    title: 'Custom',
                    description: 'Custom Reports Docs',
                    keywords: ['custom-reports'],
                  },
                  items: [
                  ]
                },
              ]
            },
          ]
        }
]

const sdk = [
{
          type: 'category', 
          label: 'SDK',
          items: [
          'sdk/introduction',
          'sdk/exception_handling',
          ]
        }
]

const dev = [
    {
      type: 'category', 
      label: 'Developers 👩‍💻',
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
      label: 'Growth 🌱',
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
      label: 'GTM Leaders 🚀',
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

const graphql = [
  {
    type: 'category',
    label: 'Workflow',
    items: [
      {
        type: 'autogenerated',
        dirName: 'graphql/workflow'
      },
    ]
  },
  {
    type: 'category',
    label: 'Onboarding',
    items: [
      {
        type: 'autogenerated',
        dirName: 'graphql/onboarding'
      },
    ]
  },
  {
    type: 'category',
    label: 'Invitation',
    items: [
      {
        type: 'autogenerated',
        dirName: 'graphql/invitation'
      },
    ]
  },
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
        'getting-started/onboarding_to_thrivestack',
        //{
        //  type: 'category', 
        //  label: 'Personas 👥',
        //  link: {
        //    type: 'generated-index',
        //    title: 'Personas',
        //    description: "Persona Level Documentation",
        //    keywords: ["personas"],
        //  },
        //  items: [...dev, ...pms, ...gtm],
        //},
        build,
        analyze,
        sdk,
      ]
    }
  ],
  buildSidebar: build,
  analyzeSidebar: analyze,
  devsSidebar: dev,
  pmsSidebar: pms,
  gtmLeadersSidebar: gtm,

  // Uncomment to show API Sidebar
  apiSidebar: [
    {
      type: "html",
      value: "<span>APIs and References</span><hr style='margin: 8px 0 4px;'>",
      defaultStyle: true,
    },
    "getting-started/apis-non-gen/apis-introduction",
    "getting-started/apis-non-gen/using-the-try-out-options",
    //{
    //  type: "category",
    //  label: "Self Serve",
    //  link: {
    //    type: "generated-index",
    //    title: "API",
    //    description:
    //      "Documentation for APIs",
    //  },
    //  // @ts-ignore
    //  items: [
    //    "getting-started/apis-non-gen/self-serve-apis-intro",
    //    "getting-started/apis-non-gen/self-serve-apis-try-out",
    //    graphql,
    //  ]
    //},
    {
      type: "category",
      label: "Analyze",
      link: {
        type: "generated-index",
        title: "API",
        description:
          "Documentation for APIs",
      },
      // @ts-ignore
      items: [
        require("./docs/public_apis/sidebar.js"),
      ]
    },
    {
      type: "html",
      value: "<hr style='margin: 3px 0 4px;'>",
      defaultStyle: true,
    },
    {
      type: "html",
      value: "<a href='https://www.postman.com/thrivestack-shreyanshd/workspace/thrivestack-apis' style='display:inline-block;background-color:#7f56d9;color:#fff;padding:5px 20px;margin: 10px;border-radius:5px;text-decoration:none;text-align:center;'><svg height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style='vertical-align:middle;margin-right:8px;'><path d='M8 5V19L19 12L8 5Z' fill='white'/></svg>Run In Postman</a>"
    }
  ],
};

module.exports = sidebars;
