# Account Deleted

# 1. Introduction

The aim is to generate an ‘account deleted’ event that enables SaaS builders to track when an account is deleted from their product.

![Account Deleted Flowchart](/img/docs/events/account_deleted.png)

## 1.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as property.

### 1.2.1. Event Parameters

To complete this step, you need to provide five pieces of information: the first is the event name, the second is the user ID, the third is the group ID, the fourth is additional properties associated with the event, and the fifth is the timestamp.

| Parameter   | Type   | Description                                                  |
|-------------|--------|--------------------------------------------------------------|
| `event_name`| String | The name of the event being tracked.                         |
| `properties`| Object | Additional properties associated with the event.             |
| `user_id`   | String | The unique identifier of the user triggering the event.      |
| `group_id`  | String | The unique identifier of the account triggering the event.   |
| `timestamp` | Date   | Date the user’s account was first created. Recommends using ISO-8601 date strings. |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 1.2.2. Event Properties

The following properties of how an event is described by a schema:

| Property       | Type   | Description                             |
|----------------|--------|-----------------------------------------|
| `account_name` | String | The name of the account.                |
| `context.group_id` | String | The id of the account being created. |

### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties.

```json
{
  "user_id": "user_123",
  "event": "Event Name",
  "properties": {
    "account_name": "Account Name"
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
  "event": "account_deleted",
  "properties": {
    "account_name": "Example, Inc."
  },
  "context": {
    "group_id": "47464e5b-4727-11ee-aeb6-fefbf8354ds3"
  },
  "timestamp": "2023-11-02T00:30:08.276Z"
}
```
