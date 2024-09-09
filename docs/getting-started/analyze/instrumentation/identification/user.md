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

| Traits          | Type   | Description                                                      |
|-----------------|--------|------------------------------------------------------------------|
| `address`       | Object | Street address of a user optionally containing city, country, postal_code, state, or street |
| `age`           | Number | Age of a user                                                    |
| `avatar`        | String | URL to an avatar image for the user                              |
| `birthday`      | Date   | User’s birthday                                                  |
| `company`       | Object | Company the user represents, optionally containing name (String), id (String or Number), industry (String), employee_count (Number) or plan (String) |
| `description`   | String | Description of the user                                          |
| `first_name`    | String | First name of a user                                             |
| `gender`        | String | Gender of a user                                                 |
| `last_name`     | String | Last name of a user                                              |
| `name`          | String | Full name of a user. If you only pass a first and last name. We automatically fill in the full name for you. |
| `phone`         | String | Phone number of a user                                           |
| `title`         | String | Title of a user, usually related to their position at a specific company. Example: “VP of Engineering” |
| `username`      | String | User’s username. This should be unique to each user, like the usernames of Twitter or GitHub. |
| `website`       | String | Website of a user                                                |


### 1.4. Identify call Authentication Flow
(illustration)

1.***User Authentication***: User authenticates using OAuth provider (e.g., Google, Microsoft, Okta).
2.***Access Token Issued***: After successful authentication, the IdP returns an access token.
3.***Identity Call***: You make an API call to the user info/identity endpoint using the access token.
4.***Receive User Data***: The IdP responds with the user's profile data, which you can use in your application.

### 1.5 Common Scopes for the identify call
The access token should be generated with appropriate scopes to allow access to the user's identify information. Some common scopes include:
`openid`: OpenID Connect scope for retrieving basic user information.
`profile`: To get additional profile information (like name, picture).
`email`: To get the user's email.

### 1.6. Sample

A JSON object with the required Identify Object fields and any additional traits associated with user. [Try this API out](/public_apis/identify)
## End Point
URL:`https://api.dev.app.thrivestack.ai/api/identify` Method: `POST`
#### Sample JSON request
```json
{
  "user_id": "user123",
  "traits": {
    "name": "first_name last_name",
    "email": "first_name.last_name@example.com"
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
      "name": "first_name last_name",
      "email": "first_name.last_name@example.com"
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
