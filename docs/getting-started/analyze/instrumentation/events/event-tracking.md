# Track

## 1. Introduction

The Track API records and analyzes user interactions in an application, logging user actions and their related features for event tracking and analytics.The actions your users execute, and the features that describe those actions, can be recorded with the Track API call.

![Track Flowchart](/img/docs/analyze/apis/track-flowchart.png)

## 1.1 Track API

- The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as property.

### 1.2 Event Parameters

You need to provide four pieces of information: 
1. Event name
2. User ID
3. Additional properties associated with the event
4. Timestamp.

| Parameter     | Type   | Description                                               |
|---------------|--------|-----------------------------------------------------------|
| `event_name`  | String | The name of the event being tracked.                      |
| `properties`  | Object | Additional properties associated with the event.          |
| `user_id`     | String | The unique identifier of the user triggering the event.   |
| `timestamp`   | Date   | Date and time when the user’s account was first created. Recommends using ISO-8601 date strings. |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 1.3 Event Properties
These are the properties you commonly used for tracking user-related information

The following properties of how an event is described by:

| Property     | Type   | Description                 |
|--------------|--------|-----------------------------|
| `email`      | String | The email of the user.      |
| `name`       | String | The name of the user.       |
| `first_name` | String | The first name of the user. |
| `last_name`  | String | The last name of the user.  |

### 1.4 End point

URL :`https://api.dev.app.thrivestack.ai/api/track`
Method:`POST`

### 1.5 Headers
- `Authorization: Bearer <token>`  Replace <token> with a valid Thrivestack Management token that includes the required scopes. (Ref: [Token API Documentatin](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scopes: track_api, telemetry_apis) 
- `Content-Type: application/json` indicates that the request body is in the JSON format.

#### 1.6 Sample

A JSON object with the required Event Object fields and any additional event properties. [Try Out](../../../../integrate/public_apis/track)

#### Sample JSON Request
```json
{
    "event": "User Registered",
    "properties": {
        "email": "JohnDoe@coloruz.com",
        "name": "John Doe",
        "first name": "John",
        "last name":"Doe"
    },
    "user_id": "user123",
    "timestamp": "20-11-23T22:28:55.111Z"
}
```
#### Sample JSON Response
#### 1.Successful Response
```json
{
    "status": "success",
    "message": "Event recorded successfully",
    "event": {
        "name": "User Registered",
        "properties": {
            "email": "JohnDoe@coloruz.com",
            "name": "John Doe",
            "first name": "John ",
            "last name":"Doe"
        },
        "user_id": "user123",
        "timestamp": "2023-11-20T22:28:55.111Z"
    }
}
```
#### 2.Error Response
```json
{
    "status": "error",
    "message": "Failed to record the event",
    "error_code": "INVALID_REQUEST"
}
```