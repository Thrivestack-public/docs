# User Waitlisted

## 1. Introduction

The goal is to generate a 'User Waitlisted' event that enables SaaS builders to track when a user has been put on a waitlist in their product.

## 1.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as a property.

### 1.2.1. Event Parameters

To complete this step, you need to provide five pieces of information: the event name, the user ID, the group ID, additional properties associated with the event, and the timestamp.

| Parameter            | Type   | Description                                                                        |
| -------------------- | ------ | ---------------------------------------------------------------------------------- |
| `event_name`         | String | The name of the event being tracked.                                               |
| `properties`         | Object | Additional properties associated with the event.                                   |
| `user_id`            | String | The unique identifier of the user triggering the event.                            |
| `group_id`           | String | The unique identifier of the account triggering the event.                         |
| `timestamp`          | Date   | The date and time the event occurred, recommended to use ISO-8601 date strings.    |
| `context` (optional) | Object | A dictionary of extra information that provides useful context about a data point. |

### 1.2.2. Event Properties

The following properties describe how an event is defined by a schema:

| Property | Type   | Description            |
| -------- | ------ | ---------------------- |
| `email`  | String | The email of the user. |
| `id`     | String | The ID of the user.    |

### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties.

```json
{
  "user_id": "user_123",
  "event": "Event Name",
  "properties": {
    "email": "JoeD@example.com",
    "id": "622513e3-fc53-4fc0-98eb-f9235adf71c9"
  },
  "context": {
    "group_id": "account_123"
  },
  "timestamp": "2023-11-02T00:30:08.276Z"
}
```

### 1.2.4. [Try Out!](../../../../../integrate/public_apis/track)

```json
{
  "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
  "event": "user_waitlisted",
  "properties": {
    "email": "JoeD@example.com",
    "id": "622513e3-fc53-4fc0-98eb-f9235adf71c9"
  },
  "context": {
    "group_id": "47464e5b-4727-11ee-aeb6-fefbf8354ds3"
  },
  "timestamp": "2023-11-02T00:30:08.276Z"
}
```
