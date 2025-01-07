# Account Added User

## Overview

Tracking the "account_added_user" event helps SaaS builders monitor when a user is added to an account. This event provides insights into account growth and user role assignments within the product.

>To send this event, the _Track API_ is used. For more details, [click here](/getting-started/analyze/instrumentation/events/event-tracking).

</hr>

## Event Details for Track API

### Request Fields

When sending the "account_added_user" event, the following parameters are required:

| Parameter   | Type   | Description                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| `event_name`  | String | The name of the event being tracked. Use `"account_added_user"`.                                   |
| `user_id`    | String | A unique identifier of the user being added to the account.                                       |
| `properties`  | Object | Additional properties that provide more details about the user and the account.                   |
| `timestamp`   | Date   | The time when the user was added to the account, in ISO-8601 format.                              |
| `context` | Object | Additional metadata to provide more context (e.g., device, location, etc.).                 |

### Event Properties

The `properties` field contains additional data about the account and user being added. These are the expected fields within the properties object:

| Property          | Type   | Description                                                |
|-------------------|--------|------------------------------------------------------------|
| `account_name`      | String | The name of the account to which the user is being added.   |
| `user_email`        | String | The email address of the user being added to the account.   |


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
        "event_name": "account_added_user",
        "properties": {
            "account_name": "acme.com",
            "user_email": "JohnDoe@acmelabs.com"
        },
        "user_id": "0rwtoH3IN",
        "timestamp": "2024-10-20T15:51:35.059000Z",
        "context": {
            "group_id": "ng6SrfNCx",
            "org_id":"rWEuEHRSa"
        }
    }
]
```

</hr>

##  Sample cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_auth_token>' \
--data-raw '[
    {
        "event_name": "account_added_user",
        "properties": {
            "account_name": "acme.com",
            "user_email": "JohnDoe@acmelabs.com"
        },
        "user_id": "0rwtoH3IN",
        "timestamp": "2024-10-20T15:51:35.059000Z",
        "context": {
            "group_id": "ng6SrfNCx",
            "org_id":"rWEuEHRSa"
        }
    }
]'
```