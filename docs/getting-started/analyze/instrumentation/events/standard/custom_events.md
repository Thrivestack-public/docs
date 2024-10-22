# Custom Events

## Overview

Tracking the "[Your Custom Event]" allows SaaS builders to monitor specific actions performed by users in their product. This event provides insights into user interactions and engagement within the application.

<!-- ![](/img/docs/events/custom_event.png) -->

> To send the "[Your Custom Event]", the _Track API_ is used. For more details, refer to the [Track API](/getting-started/analyze/instrumentation/events/event-tracking).

<hr/>

## Event Details for Track API

### Request Fields

When sending the "[Your Custom Event]", the following parameters are required:

| Parameter   | Type   | Description                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| event_name        | String | The name of the event being tracked. Use `"[Your Custom Event]"`.                                |
| user_id     | String | A unique identifier of the user triggering the event.                                           |
| properties  | Object | Additional properties that provide more details about the event.                                 |
| timestamp   | Date   | The time when the event occurred, in ISO-8601 format.                                          |
| context     | Object | Additional metadata to provide more context (e.g., device, location, etc.).                     |

### Event Properties

The `properties` field contains additional data relevant to the event. This is a flexible field that can include various properties, such as:

| Property          | Type   | Description                                               |
|-------------------|--------|-----------------------------------------------------------|
| user_email        | String | The email address of the user who triggered the event.    |
| action            | String | The specific action taken by the user (e.g., "clicked_button"). |
| feature_name      | String | The name of the feature used during the event (e.g., "analytics_dashboard"). |
| subscription_type | String | The type of subscription associated with the event (e.g., "premium"). |


### Event Context

The `context` field provides additional metadata that gives more context for the event. This is also flexible and can include various contextual properties, such as:

| Context Property   | Type   | Description                                                               |
|--------------------|--------|---------------------------------------------------------------------------|
| group_id           | String | A unique identifier for the associated account or group.                 |
| device_type        | String | The type of device used by the user (e.g., "mobile", "desktop").         |
| location           | String | The geographical location of the user when the event occurred (e.g., "New York, USA"). |
| referrer           | String | The source from which the user navigated to the product (e.g., "email_campaign"). |

### Example JSON Payload

```json
[
  {
      "event_name": "[Your Custom Event]",
      "properties": {
          "user_email": "JaneDoe@example.com",
          "action": "clicked_button",
          "feature_name": "analytics_dashboard",
          "subscription_type": "premium"
      },
      "user_id": "user_123",
      "timestamp": "2024-10-20T15:51:36.514000Z",
      "context": {
          "group_id": "account_456",
          "device_type": "mobile",
          "location": "New York, USA",
          "referrer": "email_campaign"
      }
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
    "event_name": "[Your Custom Event]",
    "properties": {
        "user_email": "JaneDoe@example.com",
        "action": "clicked_button",
        "feature_name": "analytics_dashboard",
        "subscription_type": "premium"
    },
    "user_id": "user_123",
    "timestamp": "2024-10-20T15:51:36.514000Z",
    "context": {
        "group_id": "account_456",
        "device_type": "mobile",
        "location": "New York, USA",
        "referrer": "email_campaign"
    }
  }
]
'
```
