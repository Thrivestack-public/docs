# Signed up

## Overview

Tracking the "signed_up" event helps in understanding the acquisition process of your product. It enables SaaS builders to monitor when users are registering for their platform, providing critical insights into user acquisition and onboarding.

<!-- ![](/img/docs/events/signed_up.png) -->

> To send this event, the _Track API_ is used. For more details, [click here](/getting-started/analyze/instrumentation/events/event-tracking).

<hr/>

## Event Details for Track API
### Request Field
When sending the _signed_up_ event, the following parameters are required:

| Parameter   | Type   | Description                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| event_name  | String | The name of the event being tracked. Use `"signed_up"`.                                           |
| user_id     | String | A unique identifier of the user signing up.                                                      |
| properties  | Object | Additional properties that provide more details about the user who signed up.                    |
| timestamp   | Date   | The time when the user signed up, in ISO-8601 format.                                            |
| context (optional) | Object | Additional metadata to provide more context (e.g., device, location, etc.).                 |

### Event Properties
The `properties` field contains additional data that helps in identifying the user who signed up. These are the expected fields within the properties object:

| Property      | Type   | Description                                                |
|---------------|--------|------------------------------------------------------------|
| email         | String | The email address of the user who signed up.                |
| name          | String | The full name of the user (typically a combination of first and last name). |
| first_name    | String | The first name of the user.                                 |
| last_name     | String | The last name of the user.                                  |


### Example JSON Payload

```json
[
    {
        "event_name": "signed_up",
        "properties": {
            "email": "JohnDoe@acmelabs.com",
            "name": "JohnDoe"
        },
        "user_id": "5p442d0e-11b8-43d2-a933-04f62bb832e1",
        "timestamp": "2024-10-20T15:51:35.059000Z"
    }
]
```

<hr/>

## Sample cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_auth_token>' \
--data-raw '[
    {
        "event_name": "signed_up",
        "properties": {
            "email": "JohnDoe@acmelabs.com",
            "name": "JohnDoe"
        },
        "user_id": "5p442d0e-11b8-43d2-a933-04f62bb832e1",
        "timestamp": "2024-10-20T15:51:35.059000Z"
    }
]'
```
