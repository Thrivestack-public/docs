---
hide_table_of_contents: true
---
# Start Here 🚀

Explore ThriveStack's API reference documentation. You are even test out the APIs directly from the browser,
or Run the APIs in Postman.

:::tip
 **Event tracking is pre-built into the no-code self-serve workflows!**

API integrations aren't required for Tracking (Events, Users, or Groups) if you use ThriveStack's no-code workflows. However, for custom workflows, our APIs have got you covered.
:::

<br />

##  Modules

ThriveStack comprises two distinct modules: ['Self Serve'](/getting-started/self-serve/start-here) and ['Analyze'](/getting-started/analyze/instrumentation/overview)
In line with this architecture, our APIs are bifurcated accordingly. Each module presents a unique set of APIs and functionalities, tailored to meet the specific requirements of each module.

<table>
  <thead>
    <tr>
      <th>Module</th>
      <th>Description</th>
      <th>APIs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><a href="/category/self-serve">Self Serve 🛎️</a></strong></td>
      <td>Enhance your Product with streamlined collaboration, seamless onboarding, and efficient workflow management.<br/><br/><strong>Sample Use Cases:</strong><br/>1. Invite one or multiple users to your product.<br/>2. Publish your no-code user workflow to development environment.</td>
      <td>
        <table>
          <tr>
            <td><a href="/getting-started/self-serve/apis/invitation">Invitation</a></td>
            <td><a href="/graphql/invitation/directives/auth">API Reference</a></td>
          </tr>
          <tr>
            <td><a href="/getting-started/self-serve/apis/onboarding">Onboarding</a></td>
            <td><a href="/graphql/onboarding/directives/auth">API Reference</a></td>
          </tr>
          <tr>
            <td><a href="/getting-started/self-serve/apis/publish">Publish</a></td>
            <td><a href="/graphql/workflow/directives/deprecated">API Reference</a></td>
          </tr>
          <tr>
            <td><a href="/getting-started/self-serve/apis/promote">Promote</a></td>
            <td><a href="/graphql/workflow/directives/deprecated">API Reference</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td><strong><a href="/getting-started/analyze/instrumentation/overview">Analyze 📈</a></strong></td>
      <td>Integrate external data or create custom events for specific needs.<br/><br/><strong>Sample Use Case:</strong><br/>1. Track the events or actions performed by the user on you product.<br/>2. Collect information about a newly signed up user.</td>
      <td>
        <table>
          <tr>
            <td><a href="/getting-started/analyze/authentication">Token</a></td>
            <td><a href="/public_apis/token">API Reference</a></td>
          </tr>
          <tr>
            <td><a href="/getting-started/analyze/instrumentation/identification/user">Identify</a></td>
            <td><a href="/public_apis/identify">API Reference</a></td>
          </tr>
          <tr>
            <td><a href="/getting-started/analyze/instrumentation/identification/group">Group</a></td>
            <td><a href="/public_apis/group">API Reference</a></td>
          </tr>
          <tr>
            <td><a href="/getting-started/analyze/instrumentation/events/event-tracking">Track</a></td>
            <td><a href="/public_apis/track">API Reference</a></td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<br />

## Authentication

The ThriveStack API uses API keys for authentication. You can visit the [API Keys](#) page to create or retrive
your keys.

Your API key is a secret and carry privileges. Do not share your secret API key and be sure to keep them secure!

All API requests should include your API key in an Authorization HTTP header as follows:

```
Authorization: Bearer API_KEY
```
<br />

## Trying Out APIs

Explore the APIs in various ways:

1. **[Run in Postman](https://www.postman.com/thrivestack-shreyanshd/workspace/thrivestack-apis) 🏃:** Click the 'Run in Postman' button to access ThriveStack's Postman workspace. Here, you can directly execute requests or download/fork the Postman Collections for extended testing.

2. **Use the Built-in 'Try Out' Feature 🔍:**
    - **REST APIs 🌐:** Each REST API reference page includes a dedicated '[Try Out](/public_apis/token#request)' section for immediate testing.
    - **GraphQL APIs 🔗:** Utilize the [GraphQL Explorer](/getting-started/apis-non-gen/self-serve-apis-try-out) for an interactive API exploration experience.



For more information about 'Try Out' feature, refer this [Guide](/getting-started/apis-non-gen/using-the-try-out-options).
