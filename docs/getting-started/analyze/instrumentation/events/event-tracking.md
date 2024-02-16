# Track

## 1. Introduction

The actions your users execute, and the features that describe those actions, can be recorded with the Track API call.

![Track Flowchart](/img/docs/track-flowchart.png)

## 1.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as property.

### 1.2.1. Event Parameters

You need to provide four pieces of information: the first is the event name, the second is the user ID, the third is additional properties associated with the event, and the fourth is the timestamp.

| Parameter     | Type   | Description                                               |
|---------------|--------|-----------------------------------------------------------|
| `event_name`  | String | The name of the event being tracked.                      |
| `properties`  | Object | Additional properties associated with the event.          |
| `user_id`     | String | The unique identifier of the user triggering the event.   |
| `timestamp`   | Date   | Date the user’s account was first created. Recommends using ISO-8601 date strings. |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 1.2.2. Event Properties

The following properties of how an event is described by:

| Property     | Type   | Description                 |
|--------------|--------|-----------------------------|
| `email`      | String | The email of the user.      |
| `name`       | String | The name of the user.       |
| `first_name` | String | The first name of the user. |
| `last_name`  | String | The last name of the user.  |

#### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties. [Try Out](../../../../integrate/public_apis/track)


```json
{
    "event": "event_name",
    "properties": {
        "property1": "value1",
        "property2": "value2"
    },
    "user_id": "user123",
    "timestamp": "20-11-23T22:28:55.111Z"
}
```
