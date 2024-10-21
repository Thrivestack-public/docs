# Authentication
## Authentication
Authentication is crucial in ensuring that only authorized users and applications can access your APIs. It helps protect sensitive data, prevent unauthorized access, and maintain the integrity of your system. By implementing robust authentication mechanisms, you can safeguard your application from potential security threats.

### Thrivestack's Authentication Method

Thrivestack uses OAuth 2.0 for authentication, which is more secure compared to traditional API keys and normal JWT tokens. OAuth 2.0 provides enhanced security features, including token expiration, scope limitations, and secure token storage, making it a reliable choice for modern applications.

![ThriveStack Authentication Flowchart](/img/docs/analyze/apis/api-auth-flowchart.png)

<hr/>

## Authorization
Authorization is the process of granting or denying access to resources based on the permissions associated with the authenticated user. Thrivestack uses scopes to define the level of access and the specific APIs that a token can access.

### Scopes
Scopes are used to limit the actions that can be performed with a token. Each scope corresponds to a specific set of permissions for an API. Below is a list of common scopes and their descriptions:

| Scope ID               | Name                              | Description                                                       |
|------------------------|-----------------------------------|-------------------------------------------------------------------|
| `telemetry_apis`       | Telemetry APIs                    | Authorises all telemetry APIs, `/track`, `/identify`, and `/group`|
| `track_api`            | Telemetry:Track API               | Authorised only for `/track` API                                  |
| `identify_api`         | Telemetry:Identify API            | Authorised only for `/identify` API                               |
| `group_api`            | Telemetry:Group API               | Authorised only for `/group` API                                  |
| `user_management`      | User Management API               | Authorises all APIs related to user management                    |

<hr/>

## Steps to Generate an Access Token
If you've already created an API key, you can skip to [Step 2: Generate an Access Token](##2-generate-an-access-token-via-token-api)

### 1. Create an API Key
If you don't have an API key yet, follow these steps to create one:

1. Navigate to [API Key Page](https://app.thrivestack.ai/build/api-keys)
2. Click on **Create New API Key**.
3. Enter a name for your API key.
4. Select an expiry date.
5. Set the appropriate rotation frequency.
6. Click on **Create**.

You will receive a private RSA key along with key details. Make sure to _copy the key and store it securely, or download the JSON file_.

### 2. Generate an Access Token Via Token API
Use the Token API endpoint to generate an OAuth 2.0 token, which will be required to authenticate requests to Thrivestack APIs.
[➡️ Proceed to the Token API for detailed steps](./token)