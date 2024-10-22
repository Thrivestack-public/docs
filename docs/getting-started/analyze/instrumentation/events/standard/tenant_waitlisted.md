# Tenant Waitlisted

## Overview

Tracking the "tenant_waitlisted" event helps SaaS builders monitor when an account or tenant has been placed on a waitlist in their product. This event provides insights into account management and user interest.

<!-- ![](/img/docs/events/tenant_waitlisted.png) -->

> To send the "tenant_waitlisted" event, the _Track API_ is used. For more details, refer to the [Track API](/getting-started/analyze/instrumentation/events/event-tracking).

<hr/>

## Event Details for Track API

### Request Fields

When sending the "tenant_waitlisted" event, the following parameters are required:

| Parameter   | Type   | Description                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| event_name  | String | The name of the event being tracked. Use `"tenant_waitlisted"`.                                   |
| user_id     | String | A unique identifier of the user associated with the waitlisted account.                         |
| properties   | Object | Additional properties that provide more details about the account being waitlisted.             |
| timestamp   | Date   | The time when the account was waitlisted, in ISO-8601 format.                                  |
| context     | Object | Additional metadata to provide more context (e.g., device, location, etc.).                     |

### Event Properties

The `properties` field contains additional data about the account being waitlisted. These are the expected fields within the properties object:

| Property          | Type   | Description                                               |
|-------------------|--------|-----------------------------------------------------------|
| email             | String | The email address associated with the waitlisted account.  |

### Event Context

The `context` field provides additional metadata that gives more context for the event.

| Context Property   | Type   | Description                                                               |
|--------------------|--------|---------------------------------------------------------------------------|
| group_id           | String | A unique identifier for the account that has been waitlisted.             |

### Example JSON Payload

```json
[
  {
    "event_name": "tenant_waitlisted",
    "user_id": "5p442d0e-11b8-43d2-a933-04f62bb832e1",
    "properties": {
      "email": "JoeD@example.com"
    },
    "context": {
      "group_id": "bp497d1a-0159-4009-9454-8a1b0e7c0a60"
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
      "event_name": "tenant_waitlisted",
      "user_id": "5p442d0e-11b8-43d2-a933-04f62bb832e1",
      "properties": {
        "email": "JoeD@example.com"
      },
      "context": {
        "group_id": "bp497d1a-0159-4009-9454-8a1b0e7c0a60"
      },
      "timestamp": "2023-11-02T00:30:08.276Z"
    }
]
'
```
