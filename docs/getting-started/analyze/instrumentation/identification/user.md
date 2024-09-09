# Identify

## 1.What is Identify Call
An identify call is a type of API request that helps identify and track who the user is. This call is used to attach important information about the user to a unique user profile in a system, usually for tracking purposes.

##### The flow shows how a SaaS system can recognize and track user actions from the point they are identified (with details) to tracking their interactions with the platform. If they aren't identified, they remain anonymous.

![User Identify Flowchart](/img/docs/analyze/apis/identify-flowchart.png)

## 1.1. Identify API
An Identify API is designed to handle and manage user identify information within an application.
The `/identify` call is used to identify users and associate traits with their profiles.

## 1.2. Identify Parameters

You need to provide three pieces of information: a unique identifier for the user, additional traits associated with the user, and a timestamp.

| Parameter       | Type   | Description                                                      |
|-----------------|--------|------------------------------------------------------------------|
| `user_id`       | String | The unique identifier of the user triggering the event.          |
| `user_traits`   | Object | Additional traits associated with the user.                      |
| `timestamp`     | Date   | Date the user’s account was first created.                       |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

## 1.3. User Traits

The following traits described as a traits:

| Traits          | Type   | Description                                                       |
|-----------------|--------|------------------------------------------------------------------ |
|`enrichment_first_name`              | string | User's first name                    |
|`enrichment_last_name`               | string | User's last name                     |                                        
|`enrichment_full_name`               | string | The complete name of the user, typically a combination of their first and last name|                                       
|`enrichment_avatar`                  | string | The URL or file path to the users’s profile picture or avatar.|                                                       
|`enrichment_email_provider`          | string | The provider of the user's email service (e.g., Gmail, Outlook, custom domain).                           |
|`enrichment_phone`                   |[]string | A list of phone numbers associated with the user.           |                                     
|`enrichment_city`                    | string | The city where the user is located.            | 
|`enrichment_state`                   | string | The state or province where the user is located.   |                                                     
|`enrichment_state_code`              | string | The abbreviated code for the state  |                                                  
|`enrichment_time_zone`               | string | The time zone in which the user is located.              |                                               
|`enrichment_location`                | string | A general description of where the user is based, which might include city, state, or region. |          
|`enrichment_country`                 | string | The country where the user is located.|                                       
|`enrichment_country_code`            | string | The ISO code for the country |                                                              
|`enrichment_employment_domain`       | string | The domain of the company where the user is employed, typically the company's website domain. |                     
|`enrichment_employment_name`         | string | The name of the company where the user is employed. |                     
|`enrichment_employment_role`         | string | The user's role within their company (e.g., Developer, Marketing Manager).          |                    
|`enrichment_employment_seniority`    | string | The level of seniority of the user’s role (e.g., Junior, Senior, Executive). |                    
|`enrichment_employment_sub_role`     | string | More detailed or specific role  of the user.  |                           
|`enrichment_employment_title`        | string | The official job title of the user(e.g., Chief Technology Officer). |                           
|`enrichment_facebook_handle`         | string | The Facebook profile or page handle of the user. |                                                       
|`enrichment_github_handle`           | string | The GitHub profile handle of the user, if they have one. |                                                 
|`enrichment_linkedin_handle`         | string | The LinkedIn profile handle of the user.               |                                                  
|`enrichment_twitter_handle`          | string | The Twitter profile handle of the user.   |                                                                 
|`enrichment_inactive_at`             | string | The date or timestamp when the user became inactive   |                                                               
|`enrichment_active_at`               | string | The date or timestamp when the user became active  |                                                                    

###### Note:
We user enrichment along with traits is to clarify that we uses these traits for the enrichment process.

### 1.4. Identify call Authentication Flow
1.***User Authentication***: User authenticates using OAuth provider (e.g., Google, Microsoft, Okta).
2.***Access Token Issued***: After successful authentication, the IdP returns an access token.
3.***Identity Call***: You make an API call to the user info/identity endpoint using the access token.
4.***Receive User Data***: The IdP responds with the user's profile data, which you can use in your application.

### 1.5 Common Scopes for the identify call
The access token should be generated with appropriate scopes to allow access to the user's identify information. Some common scopes include:
`openid`: OpenID Connect scope for retrieving basic user information.
`profile`: To get additional profile information (like name, picture).
`email`: To get the user's email.

### 1.6 End Point
URL:`https://api.dev.app.thrivestack.ai/api/identify`
 Method: `POST`
### 1.6.1 Headers

`Authorization: Bearer <token>` Replace <token> with the actual token you obtained, which must include the telemetry_apis scope to ensure proper authorization.
`Content-Type: application/json` Indicates that the request body is in the JSON format.
`Accept:application/json`Indicates that client expects the response to be in JSON format.
`KEY: <API_KEY_VALUE>` This is a placeholder for an API key or token used for authentication.

### 1.7. Sample

A JSON object with the required Identify Object fields and any additional traits associated with user. [Try this API out](/public_apis/identify)
#### Sample JSON request
```json
{
  "user_id": "user123",
  "traits": {
    "name": "enrichment_first_name enrichment_last_name",
    "email": "enrichment_first_name.enrichment_last_name@example.com"
  },
  "timestamp": "20-11-23T22:28:55.111Z"
}
```
#### Sample response
The response will depend on the specific API you’re interacting with. Typically, it might include an acknowledgment that the data has been received and processed.
#### 1.Successful response

```json
  {
  "status": "success",
  "message": "User identity updated successfully",
  "data": {
    "user_id": "user123",
    "traits": {
      "name": "enrichment_first_name enrichment_last_name",
      "email": "enrichment_first_name.enrichment_last_name@example.com"
    },
    "timestamp": "20-11-23T22:28:55.111Z"
}
  }
```
#### 2.Error Response
```json
{
  "status": "error",
  "message": "Invalid user ID or missing fields",
  "error_code": "INVALID_REQUEST"
}
```