# Group Call

## 1.What is a group call?
A "group call" generally refers to API calls or functions that involve managing or interacting with individual user with a group, such as a company, organization, account, project, or team.

![Group Identify Flowchart](/img/docs/analyze/apis/group-flowchart.png)

## 1.1. Group API
A group api typically refers to a set of API endpoints or functions designed to manage and interact with groups,company or team.
The `/group` endpoint is used to group users together based on shared properties or behaviors. It allows you to store and update company information for personalized experiences.

## 1.2. Group Parameters

You need to provide four pieces of information: the first is the unique identifier of the user, the second is the unique identifier of the account, the third is additional traits associated with the account, and the fourth is the timestamp.

| Parameter  | Type   | Description                                                         |
|------------|--------|---------------------------------------------------------------------|
| `group_id`| String | The unique identifier of the group.                                 |
| `user_id` | String | The unique identifier of the user.                                  |
| `traits`  | Object | Additional traits associated with the group.                        |
| `timestamp`| Date  | Date the event was first created. We recommend ISO-8601 date strings.|
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

## 1.3. Group Traits

The following traits described as a traits:

| Traits      | Type   | Description                                                                 |
|-------------|--------|-----------------------------------------------------------------------------|
| `address`   | Object | Street address of a group. This should be a dictionary containing optional city, country, postal_code, state, or street. |
| `avatar`    | String | URL to an avatar image for the group.                                      |
| `description`| String| Description of the group, like their personal bio.                         |
| `email`     | String | Email address of group.                                                    |
| `employees` | String | Number of employees of a group, typically used for companies.              |
| `phone`     | String | Phone number of a group.                                                   |
| `website`   | String | Website of a group.                                                        |
| `plan`      | String | Plan that a group is in.                                                   |

### 1.4. Sample

A JSON object with the required Identify Object fields and any additional traits associated with account. [Try Out](../../../../integrate/public_apis/group)

```json
{
  "user_id": "user123",
  "group_id": "account123",
  "traits": {
    "name": "account name",
    "industry": "industry belongs to",
    "plan": "name of plan associate with account",
    "employees": "total number of employees account have"
  },
  "timestamp": "20-11-23T22:28:55.111Z"
}
```
#### Successful Response
```json
{
  "status": "success",
  "message": "Group updated successfully",
  "data": {
    "user_id": "user123",
    "group_id": "account123",
    "traits": {
      "name": "account name",
      "industry": "industry belongs to",
      "plan": "name of plan associate with account",
      "employees": "total number of employees account have"
    },
    "timestamp": "20-11-23T22:28:55.111Z"
} 
}
```
#### Error Response
```json
{
  "status": "error",
  "message": "Invalid group ID or missing fields",
  "error_code": "INVALID_REQUEST"
}
``` 
