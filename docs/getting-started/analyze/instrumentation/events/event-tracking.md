# Track

## 1. Introduction

The Track API call is commonly used in analytics and event tracking systems to record and analyze user interactions within an application.
The actions your users execute, and the features that describe those actions, can be recorded with the Track API call.

## 2.How it works
You define specific events or actions that you want to track. For example, a user clicking a “Submit” button or completing a purchase. When a tracked action occurs, your application makes an API call to the Track API endpoint. This call typically includes details about the event.

![Track Flowchart](/img/docs/analyze/apis/track-flowchart.png)

## 2.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as property.
The primary purpose of the Track API is to enable developers to send data about user actions and events to a backend server or third-party service. This data can then be used to analyze user behavior, measure engagement, and make data-driven decisions.

### 2.2.1. Event Parameters

You need to provide four pieces of information: the first is the event name, the second is the user ID, the third is additional properties associated with the event, and the fourth is the timestamp.

| Parameter     | Type   | Description                                               |
|---------------|--------|-----------------------------------------------------------|
| `event_name`  | String | The name of the event being tracked.                      |
| `properties`  | Object | Additional properties associated with the event.          |
| `user_id`     | String | The unique identifier of the user triggering the event.   |
| `timestamp`   | Date   | Date the user’s account was first created. Recommends using ISO-8601 date strings. |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 2.2.2. Event Properties

- These are the properties you commonly used for tracking user-related information

The following properties of how an event is described by:

| Property     | Type   | Description                 |
|--------------|--------|-----------------------------|
| `email`      | String | The email of the user.      |
| `name`       | String | The name of the user.       |
| `first_name` | String | The first name of the user. |
| `last_name`  | String | The last name of the user.  |

### End point

URL :`https://api.dev.app.thrivestack.ai/api/track`
Method:`POST`

### Headers
`Authorization: Bearer <token>` Replace <token> with the actual token you obtained, which must include the telemetry_apis scope to ensure proper authorization.
`Content-Type: application/json` indicates that the request body is in the JSON format.
`Accept:application/json`indicates that client expects the response to be in JSON format.
`KEY: <API_KEY_VALUE>`This is a placeholder for an API key or token used for authentication.

#### 2.2.3. Sample

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
