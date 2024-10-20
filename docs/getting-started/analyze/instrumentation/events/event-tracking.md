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

URL: `https://api.dev.app.thrivestack.ai/api/track`
Method: `POST`

### 1.5 Headers
- `Authorization: Bearer <token>`  Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API Documentation](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scopes: track_api, telemetry_apis) 
- `Content-Type: application/json` indicates that the request body is in the JSON format.

#### 1.6 Sample

A JSON object with the required Event Object fields and any additional event properties.

#### Sample cURL
```bash
curl --location 'https://api.dev.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiZjk5OTI4MmMtYjZjZi00YjQ4LTliMWEtOTAyMWVlM2Q3NmI0IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ1c2VyX21hbmFnZW1lbnQiLCJleHAiOjE3MjUwMTQwOTcsImp0aSI6ImY5OTkyODJjLWI2Y2YtNGI0OC05YjFhLTkwMjFlZTNkNzZiNCIsImlhdCI6MTcyNDkzNjA5NywiaXNzIjoiVGhyaXZlU3RhY2sifQ.dCfke26t69Xd9mKbvVH9GPCueMxnSRrL5qJwUm02giXVO1Ne8jTBH5oSAo2nisE3h6ri8FpCEfTn7qTfkBYmXyCwRGUFBkqCwZAtYWrp8ugmAlp2exsuCzFLGF5UQiwHi5qcOzsDEUa7s7UODNl7nThNwArlqTwkJp-XEc9BXCjw2mX3_9Hc0H_ozbg8pWjXIcBqLjuXjVI-VIT3P46wd3_PVJve8Hm-rOuoMkwprihJCbYavihecNff_lE2f2KIzUruIJyLeXqohd1XkVxG3xSrviDqXEbsVBA-o3rHoLZqEHC2lSm99S1Ot7DsVR19Vo5INgV4cvdsmYMfdsyXDw' \
--data-raw '[
	{
    "event": "signed_up",
    "properties": {
      "email": "JohnDoe@acmelabs.com",
      "name": "John Doe",
      "first name": "John",
      "last name": "Doe"
    },
    "user_id": "3e474abe-5943-41fd-8b7b-4c87ad95b0c7",
    "timestamp": "20-11-23T22:28:55.111Z",
    "context": {
	    "group_id": "55444abe-41fd-5943-d95b-4c87ad95b674"
    }
}]'
```
#### Sample JSON Response
#### 1.Successful Response
`Status code`: `200`
```json
{
    "success": true,
    "message": "Event(s) tracked successfully",
    "response_id": "db78083b-efda-4618-bd97-9a37afca4860"
}
```
#### 2.Error Response
An error can occur for various reasons. The `status code` returned may be `400`, `401`, `403`, or `500` depending on the type of error.
```json
{
    "success": false,
    "message": "Failed to track the event(s) due to an error.",
    "response_id": "db78083b-efda-4618-bd97-9a37afca4860"
}
```
