# User Waitlisted

## Overview

Tracking the "user_waitlisted" event helps SaaS builders monitor when a user has been placed on a waitlist in their product. This event provides insights into user engagement and interest in features.

<!-- ![](/img/docs/events/user_waitlisted.png) -->

> To send the "user_waitlisted" event, the _Track API_ is used. For more details, refer to the [Track API](/getting-started/analyze/instrumentation/events/event-tracking).

<hr/>

## Event Details for Track API

### Request Fields

When sending the "user_waitlisted" event, the following parameters are required:

| Parameter   | Type   | Description                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| event_name  | String | The name of the event being tracked. Use `"user_waitlisted"`.                                   |
| user_id     | String | A unique identifier of the user being placed on the waitlist.                                   |
| properties  | Object | Additional properties that provide more details about the user being waitlisted.                  |
| timestamp   | Date   | The time when the user was waitlisted, in ISO-8601 format.                                      |
| context     | Object | Additional metadata to provide more context (e.g., device, location, etc.).                     |

### Event Properties

The `properties` field contains additional data about the user being waitlisted. These are the expected fields within the properties object:

| Property          | Type   | Description                                                |
|-------------------|--------|------------------------------------------------------------|
| email             | String | The email address of the user being waitlisted.            |
| id                | String | A unique identifier of the user being placed on the waitlist               |

### Event Context

The `context` field provides additional metadata that gives more context for the event.

| Context Property   | Type   | Description                                                               |
|--------------------|--------|---------------------------------------------------------------------------|
| group_id           | String | A unique identifier for the account associated with the user.             |

### Example JSON Payload
```json
[
  {
    "event_name": "user_waitlisted",
    "user_id": "user_123",
    "properties": {
      "email": "JoeD@example.com",
      "id": "622513e3-fc53-4fc0-98eb-f9235adf71c9"
    },
    "context": {
      "group_id": "bp497d1a-0159-4009-9454-8a1b0e7c0a603"
    },
    "timestamp": "2023-11-02T00:30:08.276Z"
  }
]
```
<hr/>

##  Sample cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_auth_token>' \
--data-raw '[
  {
    "event_name": "user_waitlisted",
    "user_id": "user_123",
    "properties": {
      "email": "JoeD@example.com",
      "id": "622513e3-fc53-4fc0-98eb-f9235adf71c9"
    },
    "context": {
      "group_id": "bp497d1a-0159-4009-9454-8a1b0e7c0a603"
    },
    "timestamp": "2023-11-02T00:30:08.276Z"
  }
]
'
```