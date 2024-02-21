# Start Here 🚀

Explore ThriveStack's API reference documentation. You are even test out the APIs directly from the browser,
or Run the APIs in Postman.

> 🎉 **Enjoy effortless no-code solutions for standard tasks!** 
>
> API integrations aren't necessary for Self Serve Creation, Events, and Reports. But for those custom tweaks, 🛠️ our APIs have got you covered.

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
      <td><strong><a href="/category/self-serve-%EF%B8%8F-1">Self Serve 🛎️</a></strong></td>
      <td>Enhance your Product with streamlined collaboration, seamless onboarding, and efficient workflow management.<br/><strong>Sample Use Cases:</strong><br/>1.<br/>2.</td>
      <td>
        <a href="/graphql/invitation/directives/auth">Invitation</a> <br/>
        <a href="/graphql/onboarding/directives/auth">Onboarding</a> <br/>
        <a href="/graphql/workflow/directives/deprecated">Publish</a> <br/>
        <a href="/graphql/workflow/directives/deprecated">Promote</a>
      </td>
    </tr>
    <tr>
      <td><strong><a href="/getting-started/analyze/instrumentation/overview">Analyze 📈</a></strong></td>
      <td>Integrate external data or create custom events for specific needs.<br/><strong>Sample Use Case:</strong><br/>1.<br/>2.</td>
      <td>
        <a href="/public_apis/token">/token</a> <br/>
        <a href="/public_apis/identify">/identify</a> <br/>
        <a href="/public_apis/group">/group</a> <br/>
        <a href="/public_apis/track">/track</a>
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
