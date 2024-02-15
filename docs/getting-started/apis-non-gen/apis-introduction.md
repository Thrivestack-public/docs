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

| Module | Description | APIs |
|-------------|--------|--------|
| **[Self Serve 🛎️](/category/self-serve-%EF%B8%8F-1)** | Enhance your Product with streamlined collaboration, seamless onboarding, and efficient workflow management.<br/> **Sample Use Cases:**<br/>1.<br/>2.| [Invitation](/graphql/invitation/directives/auth) <br/> [Onboarding](/graphql/onboarding/directives/auth) <br/> [Publish](/graphql/workflow/directives/deprecated) <br/> [Promote](/graphql/workflow/directives/deprecated)  |
| **[Analyze 📈](/category/analyze--1)** | Integrate external data or create custom events for specific needs.<br/>**Sample Use Case:**<br/>1.<br/>2. | [/token](/public_apis/token) <br/> [/identify](/public_apis/identify) <br/> [/group](/public_apis/group) <br/> [/track](/public_apis/track) |

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
