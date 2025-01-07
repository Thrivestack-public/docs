# Account Created

## Overview

Tracking the "account_created" event helps SaaS builders monitor when a new account is created within their product. This event provides valuable insights into the initial setup phase of user onboarding and account creation.

 To send this event, the _Track API_ is used. For more details, [click here](/getting-started/analyze/instrumentation/events/event-tracking).

## Event Details for Track API

### Request Fields

When sending the "account_created" event, the following parameters are required:

| Parameter   | Type   | Description                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| `event_name`  | String | The name of the event being tracked. Use `"account_created"`.                                 |
| `user_id`     | String | A unique identifier of the user creating the account.                                             |
| `properties`  | Object | Additional properties that provide more details about the account being created.                  |
| `timestamp`   | Date   | The time when the account was created, in ISO-8601 format.                                        |
| `context`  | Object | Additional metadata to provide more context (e.g., device, location, etc.).                 |


### Event Properties

The `properties` field contains additional data related to the account being created. These are the expected fields within the properties object:

| Property          | Type   | Description                                                |
|-------------------|--------|------------------------------------------------------------|
| `account_name`      | String | The name of the account being created.                      |
| `account_domain`   | String | The domain associated with the account (if applicable).     |
| `account_id`        | String | The unique identifier of the account (usually matches `group_id`). |

### Event Context

The `context` field provides additional metadata that gives more context for the event.

| Context Property   | Type   | Description                                                               |
|--------------------|--------|---------------------------------------------------------------------------|
| `group_id`           | String | A unique identifier for the account to which the user is being mapped.     |
| `org_id`           | String | A unique identifier for the organization to which the user is being mapped.     |


### Example JSON Payload
```json
[
    {
        "event_name": "account_created",
        "properties": {
            "account_id": "ng6SrfNCx",
            "account_name": "acme.com",
            "account_domain": "acme.com"
        },
        "user_id": "0rwtoH3IN",
        "timestamp": "2024-10-20T15:51:35.059000Z",
        "context": {
            "group_id": "ng6SrfNCx",
            "org_id" : "rWEuEHRSa"
        }
    }
]
```


## Sample cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_auth_token>' \
--data '[
    {
        "event_name": "account_created",
        "properties": {
            "account_domain": "acme.com",
            "account_id": "ng6SrfNCx",
            "account_name": "acme.com"
        },
        "user_id": "0rwtoH3IN",
        "timestamp": "2024-10-20T15:51:35.059000Z",
        "context": {
            "group_id": "7ng6SrfNCx",
             "org_id" : "rWEuEHRSa"
        }
    }
]'
```
