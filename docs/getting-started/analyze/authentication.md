# Authentication

## ThriveStack's Authentication Mechanism

ThriveStack uses API Keys for security, providing authentication and authorization to access our instrumentation APIs. An API Key is a unique identifier that ensures secure access to your APIs and grants permissions based on defined scopes.

![ThriveStack Authentication Flowchart](/img/docs/analyze/apis/apikey-flow.png)

### Authentication

Authentication ensures that only authorized users and applications can access your APIs, protecting sensitive data and maintaining system integrity. ThriveStack uses API Keys for authentication, which simplifies the process and provides robust security. By including the API Key in the request headers, clients can securely access the APIs.

### Authorization - Scopes

Authorization is the process of granting or denying access to resources based on the permissions associated with the authenticated key. ThriveStack uses scopes to define the level of access and the specific APIs that an API Key can access. Each scope corresponds to a specific set of permissions for an API. Below is a list of common scopes and their descriptions:

| Scope ID               | Name                              | Description                                                       |
|------------------------|-----------------------------------|-------------------------------------------------------------------|
| `telemetry_apis`       | Telemetry APIs                    | Authorizes all telemetry APIs, `/track`, `/identify`, `/page` and `/group`|

<hr/>

## Steps to Generate and Use an API Key

### 1. Create an API Key

If you don't have an API Key yet, follow these steps to create one:

1. Navigate to [API Key Page](https://app.thrivestack.ai/build/api-keys)
2. Click on **Create New API Key**.
3. Enter a name for your API Key.
4. Select an expiry date.
5. Select the necessary scopes for your API Key.
6. Click on **Create**.

You will receive an API Key. Make sure to _copy the key and store it securely_.

### 2. Use the API Key

Include the API Key in the header of your requests as `x-api-key` for authentication and authorization. For detailed instructions, including a curl example, please refer to the dedicated API documentation.
