# Identify

## 1.Introduction
An identify call is a type of API request that helps identify and track who the user is. This call is used to attach important information about the user to a unique user profile in a system, usually for tracking purposes.

![User Identify Flowchart](/img/docs/analyze/apis/identify-flowchart.png)

### 1.1 Identify API
An Identify API is designed to handle and manage user identify information within an application.
- The `/identify` call is used to identify users and associate traits with their profiles. It allows you to store and update user information for personalized experiences.

### 1.2 Identify Parameters

Identify parameters are the unique attributes or keys used to recognize a specific user when making an `/identify` API call.
You need to provide the following pieces of information: 
1. A unique identifier for the user
2. Additional traits associated with the user
3. A timestamp.

| Parameter       | Type   | Description                                                      |
|-----------------|--------|------------------------------------------------------------------|
| `user_id`       | String | The unique identifier of the user triggering the event.          |
| `user_traits`   | Object | Additional traits associated with the user.                      |
| `timestamp`     | Date   | The date and time when the user's profile was created  |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 1.3 User Traits

User traits are used to build a detailed profile of the user.
The following traits described as a traits:

| Traits          | Type   | Description                                                       |
|-----------------|--------|------------------------------------------------------------------ |
|`enrichment_first_name`              | string | User's first name |
|`enrichment_last_name`               | string | User's last name |                                        
|`enrichment_full_name`               | string | The complete name of the user, typically a combination of their first and last name|                                       
|`enrichment_avatar`                  | string | The URL or file path to the users’s profile picture or avatar.|                                                       
|`enrichment_email_provider`          | string | The provider of the user's email service (e.g., Gmail, Outlook, custom domain). |
|`enrichment_phone`                   | Array[string] | A list of phone numbers associated with the user.|                                     
|`enrichment_city`                    | string | The city where the user is located.| 
|`enrichment_state`                   | string | The state or province where the user is located.   |                                                     
|`enrichment_state_code`              | string | The abbreviated code for the state  |                                                  
|`enrichment_time_zone`               | string | The time zone in which the user is located.  |                                               
|`enrichment_location`                | string | A general description of where the user is based, which might include city, state, or region. |          
|`enrichment_country`                 | string | The country where the user is located.|                                       
|`enrichment_country_code`            | string | The ISO code for the country |                                                              
|`enrichment_employment_domain`       | string | The domain of the company where the user is employed, typically the company's website domain. |                     
|`enrichment_employment_name`         | string | The name of the company where the user is employed. |                     
|`enrichment_employment_role`         | string | The user's role within their company (e.g., Developer, Marketing Manager). |                    
|`enrichment_employment_seniority`    | string | The level of seniority of the user’s role (e.g., Junior, Senior, Executive). |                    
|`enrichment_employment_sub_role`     | string | More detailed or specific role  of the user.  |                           
|`enrichment_employment_title`        | string | The official job title of the user(e.g., Chief Technology Officer). |                           
|`enrichment_facebook_handle`         | string | The Facebook profile or page handle of the user. |                                                       
|`enrichment_github_handle`           | string | The GitHub profile handle of the user, if they have one. |                                                 
|`enrichment_linkedin_handle`         | string | The LinkedIn profile handle of the user.  |                                                  
|`enrichment_twitter_handle`          | string | The Twitter profile handle of the user.   |                                                                 
|`enrichment_inactive_at`             | string | The date or timestamp when the user became inactive   |                                                               
|`enrichment_active_at`               | string | The date or timestamp when the user became active  |                                                                    

### 1.4 End Point
URL: `https://api.dev.app.thrivestack.ai/api/identify`
Method: `POST`

### 1.5 Headers
- `Authorization: Bearer <token>` Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API Documentation](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scopes: identify_api, telemetry_apis)
- `Content-Type: application/json` Indicates that the request body is in the JSON format.

### 1.6 Sample

A JSON object with the required Identify Object fields and any additional traits associated with user. [Try this API out](/public_apis/identify)

#### Sample JSON request
```json
{
  "user_id": "3e474abe-5943-41fd-8b7b-4c87ad95b0c7",
  "traits": {
    "name": "John Doe",
    "email": "John.Doe@acmelabs.com"
  },
  "timestamp": "20-11-23T22:28:55.111Z"
}
```
#### Sample response
#### 1.Successful response
`Status code`: `200`
```json
  {
  "success": true,
  "message": "User(s) identified successfully",
  "response_id": "f9a32c2f-29d9-476a-b0d6-f256809da9ec"
  }
```
#### 2.Error Response
An error can occur for various reasons. The `status code` returned may be `400`, `401`, `403`, or `500` depending on the type of error.
```json
{
  "success": false,
  "message": "Failed to identify the user(s) due to an error.",
  "response_id": "f9a32c2f-29d9-476a-b0d6-f256809da9ec"
}
```