# Authentication

## Overview:
The Authenticate node is a critical component of the signup workflow. This node provides the flexibility to select between two options: 
leveraging an external authentication service provider like Auth0, or utilizing a custom-built authentication system specific to your product.

If no authentication method is chosen, or if an external service provider is selected, ThriveStack will default to using Auth0 IDP Settings. 
These settings have a limited number of authentications, but you can edit them according to your convenience.

## Configuration:

### IDP Settings:

To configure IDP using Auth0 you would require the following informations,
1. **Auth0 Tenant Name**: The unique identifier for your Auth0 tenant, crucial for differentiating your instance. [Learn more](https://auth0.com/docs/get-started/tenant-settings/find-your-tenant-name-or-tenant-id).

2. **Domain URL**: This URL is associated with your Auth0 domain and is vital for API calls and authentication requests. [Learn more](https://auth0.com/docs/get-started/tenant-settings#custom-domains).

3. **Client ID**: A public identifier for apps assigned by Auth0, used in the authentication process. [Learn more](https://auth0.com/docs/applications).

4. **Client Secret**: A confidential key for authenticating your application's identity with the authorization server. [Learn more](https://auth0.com/docs/applications).

5. **App Origin**: Refers to the origin URL of your application, important for security purposes. [Learn more](https://auth0.com/docs/applications).

6. **API Origin**: The origin URL for your API, essential for ensuring secure communication with Auth0. [Learn more](https://auth0.com/docs/applications).

### Signup Page:

You can customize your Signup Page with ThriveStack's Signup Page editor.

### Error Page (Comming Soon):

You can customize your Error Page with ThriveStack's Signup Page editor.
