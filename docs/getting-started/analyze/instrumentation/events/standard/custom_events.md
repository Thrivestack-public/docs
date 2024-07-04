# Custom Events

## 1. Introduction

The goal is to generate custom events that allow SaaS builders to track specific actions performed by users in their product. 

## 1.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as a property.

### 1.2.1. Event Parameters

Custom events provide flexibility in tracking various user interactions. Below, we’ll define the structure of custom events and provide examples.

| Parameter            | Type   | Description                                                                        |
| -------------------- | ------ | ---------------------------------------------------------------------------------- |
| `event_name`         | String | The name of the event being tracked.                                               |
| `properties`         | Object | Additional properties associated with the custom event.                                   |
| `user_id`            | String | The unique identifier of the user triggering the event.                            |
| `group_id`           | String | The unique identifier of the account triggering the event.                         |
| `timestamp`          | Date   | The date and time the event occurred, recommended to use ISO-8601 date strings.    |
| `context` (optional) | Object | A dictionary of extra information that provides useful context about a data point. |

### 1.2.2. Event Properties

Custom events can have various properties. Let’s consider an example with two properties:

| Property | Type   | Description            |
| -------- | ------ | ---------------------- |
| `email`  | String | The email of the user. |
| `action`     | String | The specific action associated with the event (e.g., “clicked_button,” “completed_survey”).    |

### 1.2.3. Sample

Here are a few more custom event examples:

##### Subscription Upgraded:
```json
{
  "user_id": "user_456",
  "event": "subscription_upgraded",
  "properties": {
    "email": "AliceW@example.com"
  },
  "context": {
    "group_id": "account_789"
  },
  "timestamp": "2023-11-03T10:15:20.123Z"
}
```

##### Feature Usage:
```json
{
  "user_id": "user_789",
  "event": "feature_used",
  "properties": {
    "email": "BobS@example.com",
    "feature_name": "analytics_dashboard"
  },
  "context": {
    "group_id": "account_456"
  },
  "timestamp": "2023-11-04T14:45:30.987Z"
}

```

### 1.2.4. [Try Out!](../../../../../integrate/public_apis/track)

```json
{
  "user_id": "user_123",
  "event": "custom.event_example",
  "properties": {
    "email": "JoeD@example.com",
    "action": "clicked_button"
  },
  "context": {
    "group_id": "account_123"
  },
  "timestamp": "2023-11-02T00:30:08.276Z"
}
```
